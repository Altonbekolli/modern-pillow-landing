import { useEffect, useState } from "react";
import styles from "./legal.module.scss";

type Props = {
    title: string;
    subtitle?: string;
};

export default function LegalComingSoon({ title, subtitle = "Coming soon" }: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const id = window.setTimeout(() => setVisible(true), 80);
        return () => window.clearTimeout(id);
    }, []);

    return (
        <main className={styles.wrapper}>
            <div className={`${styles.card} ${visible ? styles.show : ""}`}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </main>
    );
}