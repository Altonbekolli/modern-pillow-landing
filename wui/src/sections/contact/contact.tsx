import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./contact.module.scss";
import type { FooterProps } from "../../types/footer";
import type { CSSVar } from "../../types/css";
import { sendContact } from "../../../api/contact";
import ContactInfoCard from "./contactInfoCard";
import ContactFormCard from "./contactFormCard";

export default function Contact({ theme }: FooterProps) {
    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const [hideTimer, setHideTimer] = useState<number | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        const res = await sendContact({ name, email, message, website: "" });

        if (res.ok) {
            if (hideTimer) window.clearTimeout(hideTimer);
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
            const id = window.setTimeout(() => setStatus("idle"), 5000);
            setHideTimer(id);
            return;
        }

        setStatus("error");
        setErrorMsg(res.error ?? t("contact.errorGeneric") ?? "Unbekannter Fehler");
    };

    const card0: CSSVar<"--i"> = { "--i": 0 };
    const card1: CSSVar<"--i"> = { "--i": 1 };

    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{t("contact.title")}</h1>
                    <p className={styles.subtitle}>{t("contact.subtitle")}</p>
                </header>

                <div className={styles.grid}>
                    <ContactInfoCard theme={theme} style={card0} />
                    <ContactFormCard
                        style={card1}
                        name={name}
                        email={email}
                        message={message}
                        setName={setName}
                        setEmail={setEmail}
                        setMessage={setMessage}
                        onSubmit={onSubmit}
                        status={status}
                        errorMsg={errorMsg}
                    />
                </div>
            </div>
        </section>
    );
}