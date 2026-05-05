import { useTranslation } from 'react-i18next'
import styles from './legal.module.scss'

export default function Privacy() {
    const { t } = useTranslation()

    const toArray = (v: unknown): string[] => {
        if (Array.isArray(v)) return v as string[]
        if (typeof v === 'string') return [v]
        return []
    }

    const hostingLogItems = toArray(t('legal.privacy.hosting.logItems', { returnObjects: true }) as unknown)
    const contactLegalItems = toArray(t('legal.privacy.contactForm.legalBases', { returnObjects: true }) as unknown)
    const rightsItems = toArray(t('legal.privacy.rights.items', { returnObjects: true }) as unknown)
    return (
        <main className={styles.legalPage}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('legal.privacy.title')}</h1>
                <p className={styles.subtitle}>{t('legal.privacy.subtitle')}</p>
            </header>

            <section className={styles.card}>
                {/* 1 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.general.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.privacy.general.p1')}</p>
                        <p>{t('legal.privacy.general.p2')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* 2 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.controller.title')}</h2>
                    <div className={styles.block}>
                        <p className={styles.name}>{t('legal.privacy.controller.name')}</p>
                        <p>{t('legal.privacy.controller.brandLine')}</p>
                        <p>{t('legal.privacy.controller.street')}</p>
                        <p>{t('legal.privacy.controller.zipCity')}</p>
                        <p>{t('legal.privacy.controller.country')}</p>

                        <p style={{ marginTop: 12 }}>
                            {t('legal.privacy.controller.emailLabel')}{' '}
                            <a className={styles.link} href={`mailto:${t('legal.privacy.controller.email')}`}>
                                {t('legal.privacy.controller.email')}
                            </a>
                        </p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* 3 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.hosting.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.privacy.hosting.p1')}</p>

                        <div className={styles.miniCard}>
                            <p className={styles.nameSmall}>{t('legal.privacy.hosting.provider.name')}</p>
                            <p>{t('legal.privacy.hosting.provider.street')}</p>
                            <p>{t('legal.privacy.hosting.provider.zipCity')}</p>
                        </div>

                        <p style={{ marginTop: 12 }}>{t('legal.privacy.hosting.p2')}</p>

                        <ul className={styles.list}>
                            {hostingLogItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        <p>{t('legal.privacy.hosting.p3')}</p>
                        <p className={styles.muted}>{t('legal.privacy.hosting.legal')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* 4 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.contactForm.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.privacy.contactForm.p1')}</p>
                        <p>{t('legal.privacy.contactForm.p2')}</p>

                        <ul className={styles.list}>
                            {contactLegalItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        <p>{t('legal.privacy.contactForm.p3')}</p>
                        <p>{t('legal.privacy.contactForm.p4')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* 5 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.amazon.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.privacy.amazon.p1')}</p>
                        <p>{t('legal.privacy.amazon.p2')}</p>
                        <p>{t('legal.privacy.amazon.p3')}</p>

                        <p>
                            <a
                                className={styles.link}
                                href={t('legal.privacy.amazon.url')}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t('legal.privacy.amazon.url')}
                            </a>
                        </p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* 6 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.cookies.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.privacy.cookies.p1')}</p>
                        <p>{t('legal.privacy.cookies.p2')}</p>
                        <p>{t('legal.privacy.cookies.p3')}</p>
                        <p className={styles.muted}>{t('legal.privacy.cookies.legal')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* 7 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.retention.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.privacy.retention.p1')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* 8 */}
                <div className={styles.section}>
                    <h2>{t('legal.privacy.rights.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.privacy.rights.p1')}</p>

                        <ul className={styles.list}>
                            {rightsItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        <p>{t('legal.privacy.rights.p2')}</p>
                        <p>{t('legal.privacy.rights.p3')}</p>

                        <p style={{ marginTop: 10 }}>
                            <a className={styles.link} href={`mailto:${t('legal.privacy.rights.email')}`}>
                                {t('legal.privacy.rights.email')}
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}