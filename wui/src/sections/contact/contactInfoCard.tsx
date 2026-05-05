import { useTranslation } from "react-i18next";
import styles from "./contact.module.scss";
import emailWhite from "../../assets/emailWHITE.svg";
import emailPrime from "../../assets/emailPrime.svg";
import type { CSSVar } from "../../types/css";

type Props = {
    theme: "light" | "dark";
    style: CSSVar<"--i">;
};

export default function ContactInfoCard({ theme, style }: Props) {
    const { t } = useTranslation();

    return (
        <div className={styles.card} style={style}>
            <div className={styles.cardTop}>
                <img
                    className={styles.iconCircle}
                    alt=""
                    src={theme === "dark" ? emailWhite : emailPrime}
                />
                <div>
                    <div className={styles.cardTitle}>{t("contact.infoTitle")}</div>
                    <div className={styles.cardText}>{t("contact.infoText")}</div>
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.kv}>
                <div className={styles.kLabel}>{t("contact.emailLabel")}</div>
                <a className={styles.kValue} href="mailto:info@sleemhome.com">
                    info@sleemhome.com
                </a>
            </div>

            <div className={styles.hint}>{t("contact.note")}</div>
        </div>
    );
}