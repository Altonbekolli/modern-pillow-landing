import { useMemo,useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './faq.module.scss'
import type { FaqItem } from '../../types/faq'
import type { CSSVar } from '../../types/css'


export default function Faq() {
    const { t } = useTranslation()
    const FAQ_ITEMS = useMemo(()=>t('faq.items',{
        returnObjects:true}) as FaqItem[],
        [t]
    )
    const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id])
    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{t('faq.title')}</h1>
                    <p className={styles.subtitle}>
                        {t('faq.subtitle')}
                    </p>
                </header>

                <div className={styles.list}>
                    {FAQ_ITEMS.map((item,idx) => {
                        const isOpen = openIds.includes(item.id)
                        const style: CSSVar<'--i'> = {
                            '--i': idx
                        }

                        return (
                            <div
                                key={item.id}
                                style={style}
                                className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                                <button
                                    type="button"
                                    className={styles.trigger}
                                    onClick={() =>
                                        setOpenIds((prev) =>
                                            prev.includes(item.id)
                                                ? prev.filter((id) => id !== item.id) // close
                                                : [...prev, item.id]                  // open
                                        )
                                    }
                                    aria-expanded={isOpen}>
                                  <span className={styles.question}>
                                    {item.question}
                                  </span>
                                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>

                                </button>

                                <div className={styles.panel}>
                                    <div className={styles.panelInner}>
                                    <p className={styles.answer}>
                                        {item.answer}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.ctaWrapper}>
                    <a
                        href="https://www.amazon.de/dp/B0G822BN62"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.cta}>
                        {t('faq.cta')}
                    </a>
                </div>
            </div>
        </section>
    )
}
