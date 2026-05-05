import { useTranslation, Trans } from 'react-i18next'
import styles from './hero.module.scss'
import type { CSSVar } from '../../types/css'
import produktBild1 from '../../assets/produktBild1.jpg'
import produktBild2 from '../../assets/produktBild2.jpg'
import produktBild3 from '../../assets/produktBild3.jpg'
import produktBild4 from '../../assets/produktBild4.jpg'
import ImageSlider from '../../components/image-slider/image-slider'


export default function Hero() {
    const { t } = useTranslation()
    const leftS: CSSVar<'--i'> = { '--i': 0 }
    const rightS: CSSVar<'--i'> = { '--i': 1 }
    const floatBS: CSSVar<'--i'> = { '--i': 3 }
    const slides = [ produktBild1, produktBild2, produktBild3, produktBild4]

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.left} style={leftS}>
                        <div className={styles.badge}>
                            <span className={styles.pulse} aria-hidden="true" />
                            {t('hero.badge')}
                        </div>

                        <h1 className={styles.title}>
                            <Trans i18nKey="hero.title">
                                <span className={styles.titleAccent} />
                            </Trans>
                        </h1>

                        <p className={styles.subtitle}>{t('hero.subtitle')}</p>

                        <div className={styles.ctas}>
                            <a
                                className={styles.primary}
                                href="https://www.amazon.de/dp/B0G822BN62"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t('hero.preorder')}
                                <span className={styles.arrow} aria-hidden="true">→</span>
                            </a>

                            <a className={styles.secondary} href="/product">
                                {t('hero.viewBenefits')}
                            </a>
                        </div>

                        <div className={styles.trustRow}>
                            <div className={styles.trustItem}>
                                <div className={styles.trustNumber}>{t('hero.trust.nights.number')}</div>
                                <div className={styles.trustLabel}>{t('hero.trust.nights.label')}</div>
                            </div>
                            <div className={styles.trustItem}>
                                <div className={styles.trustNumber}>{t('hero.trust.premium.number')}</div>
                                <div className={styles.trustLabel}>{t('hero.trust.premium.label')}</div>
                            </div>
                            <div className={styles.trustItem}>
                                <div className={styles.trustNumber}>{t('hero.trust.clean.number')}</div>
                                <div className={styles.trustLabel}>{t('hero.trust.clean.label')}</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right} style={rightS}>
                        <div className={styles.productCard}>
                            <div className={styles.productTop}>
                                <div className={styles.productChip}>{t('hero.chips.hybrid')}</div>
                                <div className={styles.productChipGhost}>{t('hero.chips.seasons')}</div>
                            </div>

                            <ImageSlider slides={slides} />

                            <div className={styles.productBottom}>
                                <div className={styles.productTitle}>{t('hero.chips.productTitle')}</div>
                                <div className={styles.productMeta}>{t('hero.chips.productMeta')}</div>
                            </div>
                        </div>

                        <div className={styles.floatingCardB} style={floatBS}>{t('hero.floating.b')}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
