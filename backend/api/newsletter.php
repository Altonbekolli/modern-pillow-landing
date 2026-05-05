<?php
declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") { http_response_code(204); exit; }
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "error" => "Method not allowed"]);
  exit;
}

function loadEnv(string $path): array {
  if (!file_exists($path)) return [];
  $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  $env = [];
  foreach ($lines as $line) {
    $line = trim($line);
    if ($line === "" || str_starts_with($line, "#")) continue;
    $pos = strpos($line, "=");
    if ($pos === false) continue;
    $key = trim(substr($line, 0, $pos));
    $val = trim(substr($line, $pos + 1));
    $val = trim($val, "\"'");
    $env[$key] = $val;
  }
  return $env;
}

$env = loadEnv(__DIR__ . "/../../.env");

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$email = trim($data["email"] ?? "");
$hp = trim($data["website"] ?? "");

if ($hp !== "") { echo json_encode(["ok" => true]); exit; }

if ($email === "") {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "Missing fields"]);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "Invalid email"]);
  exit;
}

$SMTP_HOST = $env["SMTP_HOST"] ?? "";
$SMTP_PORT = (int)($env["SMTP_PORT"] ?? "587");
$SMTP_SECURE = $env["SMTP_SECURE"] ?? "tls";
$SMTP_USER = $env["SMTP_USER"] ?? "";
$SMTP_PASS = $env["SMTP_PASS"] ?? "";

$MAIL_TO = $env["MAIL_TO"] ?? "";
$MAIL_FROM = $env["MAIL_FROM"] ?? $SMTP_USER;
$MAIL_FROM_NAME = $env["MAIL_FROM_NAME"] ?? "Website";

if ($SMTP_HOST === "" || $SMTP_USER === "" || $SMTP_PASS === "" || $MAIL_TO === "") {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "Server mail config missing"]);
  exit;
}

require_once __DIR__ . "/PHPMailer/Exception.php";
require_once __DIR__ . "/PHPMailer/PHPMailer.php";
require_once __DIR__ . "/PHPMailer/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
  $mail = new PHPMailer(true);

  $mail->isSMTP();
  $mail->Host = $SMTP_HOST;
  $mail->SMTPAuth = true;
  $mail->Username = $SMTP_USER;
  $mail->Password = $SMTP_PASS;
  $mail->Port = $SMTP_PORT;
  $mail->CharSet = "UTF-8";

  if ($SMTP_SECURE === "tls") {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  } elseif ($SMTP_SECURE === "ssl") {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  }

  $mail->setFrom($MAIL_FROM, $MAIL_FROM_NAME);
  $mail->addAddress($MAIL_TO);

  $mail->addReplyTo($email, $email);

  $mail->Subject = "Newsletter (Warteliste): Neue Anmeldung";
  $mail->Body =
    "Neue Newsletter/Warteliste Anmeldung\n\n" .
    "Email: $email\n" .
    "Zeit: " . date("Y-m-d H:i:s") . "\n";

  $mail->send();
  echo json_encode(["ok" => true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "Mail send failed"]);
}