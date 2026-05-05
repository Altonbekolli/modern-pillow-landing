import { useRef, useState } from 'react'
import styles from './language-toggle.module.scss'
import { LANGUAGE_OPTIONS } from '../../config/languages'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useCurrentLanguage } from '../../hooks/useCurrentLanguage'

export default function LanguageToggle() {
    const [open, setOpen] = useState(false)

    const { currentOption, changeLanguage } = useCurrentLanguage()
    const ref = useRef<HTMLDivElement | null>(null)
    useClickOutside(ref, () => setOpen(false), open)

    return (
        <div ref={ref} className={styles.wrap}>
            <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Sprache auswählen">
                <img className={styles.flag} src={currentOption.flag} alt="" />
                <span className={styles.caret}>▾</span>
            </button>

            {open && (
                <div className={styles.menu}>
                    {LANGUAGE_OPTIONS.map((o) => (
                        <button
                            key={o.value}
                            className={styles.item}
                            onClick={() => {
                                changeLanguage(o.value)
                                setOpen(false)
                            }}>
                            <img className={styles.flag} src={o.flag} alt="" />
                            <span className={styles.itemLabel}>{o.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
