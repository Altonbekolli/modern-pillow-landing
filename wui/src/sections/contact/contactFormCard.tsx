import { useTranslation } from "react-i18next";
import styles from "./contact.module.scss";
import arrow from "../../assets/arrow.svg";
import type { ContactFormCardProps } from "../../types/contact";

export default function ContactFormCard(props: ContactFormCardProps) {
    const { t } = useTranslation();
    const {
        style,
        name, email, message,
        setName, setEmail, setMessage,
        onSubmit,
        status, errorMsg,
    } = props;

    return (
        <div className={styles.card} style={style}>
            <div className={styles.cardTitleBig}>{t("contact.formTitle")}</div>

            <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.field}>
                    <span className={styles.label}>{t("contact.name")}</span>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder={t("contact.placeholderName")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>{t("contact.email")}</span>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder={t("contact.placeholderEmail")}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>{t("contact.message")}</span>
                    <textarea
                        className={styles.textarea}
                        rows={6}
                        placeholder={t("contact.placeholderMessage")}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

                <input
                    type="text"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                    className={styles.honeypot}
                />

                <button className={styles.submit} type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "..." : t("contact.send")}
                    <img className={styles.arrow} src={arrow} alt="" aria-hidden="true" />
                </button>

                {status === "success" && (
                    <div className={styles.successMsg} role="status" aria-live="polite">
                        <div className={styles.successTitle}>{t("contact.successTitle")}</div>
                        <div className={styles.successText}>{t("contact.successText")}</div>
                    </div>
                )}

                {status === "error" && (
                    <div className={styles.errorMsg} role="alert">
                        {errorMsg}
                    </div>
                )}
            </form>
        </div>
    );
}