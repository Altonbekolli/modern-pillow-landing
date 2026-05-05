# SLEEM® Modern Pillow Landingpage

Eine moderne, hochwertige Landingpage für das **SLEEM® Hybrid Pillow**.

Live Website: **https://www.sleemhome.de/**

Das Projekt präsentiert die Marke SLEEM® und das Hybrid Pillow mit einem cleanen Design, mehrsprachigen Inhalten, Produktbildern, FAQ, Kontaktformular, Newsletter beziehungsweise Warteliste und rechtlichen Seiten.

Die Website ist darauf ausgelegt, schnell, modern und vertrauenswürdig zu wirken. Besucher bekommen einen klaren Überblick über das Produkt und können direkt zur externen Verkaufsplattform weitergeleitet werden.

---

## Überblick

Dieses Repository besteht aus zwei Hauptteilen.

**Frontend**

Die Weboberfläche liegt im Ordner `wui` und wurde mit React, TypeScript und Vite gebaut.

**Backend**

Das kleine PHP Backend liegt im Ordner `backend` und kümmert sich um Kontaktanfragen und Newsletter Anmeldungen per SMTP Mailversand.

Zusätzlich gibt es eine CI Pipeline über GitHub Actions, die den Frontend Build und die PHP Syntax prüft.

---

## Website

Die produktive Website ist erreichbar unter: https://www.sleemhome.de/

Die Website dient der Präsentation der Marke SLEEM® und leitet Besucher bei Interesse zum Produkt auf Amazon weiter.

---

## Tech Stack

### Frontend

React 19

TypeScript 5

Vite 7

React Router

i18next

react-i18next

SCSS Modules

Sass

ESLint

### Backend

PHP 8+

PHPMailer

SMTP Mailversand

JSON API Endpoints

### Tooling

GitHub Actions

Node.js 22 in der CI

Yarn in der CI

npm für lokale Paketverwaltung möglich

---

## Kontakt und rechtliche Hinweise

Bei Fragen zur Website, zum Projekt oder zu rechtlichen Themen kann der Betreiber kontaktiert werden:
info@sleemhome.de

lle Inhalte dieser Website dienen der Präsentation der Marke SLEEM® und des Produkts. Käufe werden nicht direkt über diese Website abgeschlossen, sondern über externe Verkaufsplattformen.

Für externe Links und Plattformen gelten die jeweiligen Bedingungen und Datenschutzrichtlinien der entsprechenden Anbieter.

Alle Texte, Bilder, Logos, Designs und Markeninhalte gehören den jeweiligen Rechteinhabern. Eine Nutzung oder Weitergabe ist nur mit ausdrücklicher Zustimmung erlaubt.

---
## Status

Produktive Landingpage für SLEEM®.

Live unter:
https://www.sleemhome.de/


---

## CI Pipeline

Das Projekt nutzt GitHub Actions.

Die Pipeline läuft bei Pushes auf `main` und bei Pull Requests nach `main`.

Dabei werden das Repository ausgecheckt, Node.js eingerichtet, Frontend Dependencies installiert, der React/Vite Build ausgeführt, PHP eingerichtet und die PHP Syntax geprüft.

Die Workflow Datei liegt hier:

---

## Installation

In den Frontend Ordner wechseln:
Dependencies installieren: `yarn install`

Danach starten in /wui: `yarn dev`

Die App läuft danach lokal unter: http://localhost:5173