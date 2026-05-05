import { useTranslation } from 'react-i18next'
import styles from './legal.module.scss'

export default function Terms() {
    const { t } = useTranslation()

    return (
        <main className={styles.legalPage}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('legal.terms.title')}</h1>
                {t('legal.terms.subtitle') ? (
                    <p className={styles.subtitle}>{t('legal.terms.subtitle')}</p>
                ) : null}
            </header>

            <section className={styles.card}>
                {Array.from({ length: 9 }).map((_, i) => {
                    const idx = i + 1
                    const base = `legal.terms.sections.s${idx}`

                    const heading = t(`${base}.title`)
                    const paras = t(`${base}.paras`, { returnObjects: true }) as unknown

                    const paragraphs = Array.isArray(paras) ? (paras as string[]) : [String(paras)]

                    return (
                        <div key={idx}>
                            <div className={styles.section}>
                                <h2>{heading}</h2>
                                <div className={styles.block}>
                                    {paragraphs.map((p, pIdx) => (
                                        <p key={pIdx}>{p}</p>
                                    ))}
                                </div>
                            </div>

                            {idx !== 9 ? <div className={styles.divider} /> : null}
                        </div>
                    )
                })}
            </section>
        </main>
    )
}