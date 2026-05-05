import { useTranslation } from 'react-i18next'
import styles from './legal.module.scss'

export default function Impressum() {
    const { t } = useTranslation()

    return (
        <main className={styles.legalPage}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('legal.imprint.title')}</h1>
                <p className={styles.subtitle}>{t('legal.imprint.subtitle')}</p>
            </header>

            <section className={styles.card}>
                <div className={styles.section}>
                    <h2>{t('legal.imprint.sections.provider.title')}</h2>
                    <div className={styles.block}>
                        <p className={styles.name}>{t('legal.imprint.provider.name')}</p>
                        <p>{t('legal.imprint.provider.brandLine')}</p>
                        <p>{t('legal.imprint.provider.street')}</p>
                        <p>{t('legal.imprint.provider.zipCity')}</p>
                        <p>{t('legal.imprint.provider.country')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.section}>
                    <h2>{t('legal.imprint.sections.contact.title')}</h2>
                    <div className={styles.block}>
                        <p>
                            {t('legal.imprint.contact.emailLabel')}{' '}
                            <a className={styles.link} href={`mailto:${t('legal.imprint.contact.email')}`}>
                                {t('legal.imprint.contact.email')}
                            </a>
                        </p>

                        <p>
                            {t('legal.imprint.contact.formLabel')}{' '}
                            <a
                                className={styles.link}
                                href={t('legal.imprint.contact.formUrl')}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t('legal.imprint.contact.formUrl')}
                            </a>
                        </p>

                        <p className={styles.muted}>{t('legal.imprint.contact.responseTime')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.section}>
                    <h2>{t('legal.imprint.sections.vat.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.imprint.vat.text')}</p>
                        <p className={styles.mono}>{t('legal.imprint.vat.number')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.section}>
                    <h2>{t('legal.imprint.sections.euDispute.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.imprint.euDispute.text')}</p>
                        <p>
                            <a
                                className={styles.link}
                                href={t('legal.imprint.euDispute.url')}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t('legal.imprint.euDispute.url')}
                            </a>
                        </p>
                        <p>{t('legal.imprint.euDispute.note')}</p>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.section}>
                    <h2>{t('legal.imprint.sections.consumerDispute.title')}</h2>
                    <div className={styles.block}>
                        <p>{t('legal.imprint.consumerDispute.text')}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}