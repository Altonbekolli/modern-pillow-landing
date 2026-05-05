import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './footer.module.scss'
import type { FooterProps } from '../../types/footer'
import type { ToastType } from '../../types/ui'
import instaWhite from '../../assets/instaWhite.png'
import instaBlack from '../../assets/instaBlack.png'
import arrow from '../../assets/arrow.svg'
import { useState, useEffect } from 'react'
import { subscribeNewsletter } from '../../../api/newsletter.ts'


export default function Footer({ theme }: FooterProps) {
    const { t } = useTranslation()
    const [email, setEmail] = useState('')
    const [toast, setToast] = useState<{ type: ToastType; message: string } | null>(null)

    useEffect(() => {
        if (!toast) return
        const id = window.setTimeout(() => setToast(null), 5000)
        return () => window.clearTimeout(id)
    }, [toast])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const resp = await subscribeNewsletter({ email })
            if (resp.ok) {
                setToast({ type: 'success', message: t('footer.newsSuccess') })
                setEmail('')
            } else {
                setToast({ type: 'error', message: resp.error || t('footer.newsError') })
            }
        } catch {
            setToast({ type: 'error', message: t('footer.newsError') })
        }
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.topGrid}>
                    {/* Brand */}
                    <div className={styles.brandCol}>
                        <div className={styles.brand}>SLEEM</div>
                        <p className={styles.brandText}>
                            {t('footer.tagline')}
                        </p>

                        <a
                            className={styles.social}
                            href="https://www.instagram.com/sleemhome?igsh=MW1jOTF2NHR0MjhxZA%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram">
                            <img
                                className={styles.socialIcon}
                                src={theme === 'dark' ? instaWhite : instaBlack}
                                alt=""
                            />
                            <span className={styles.socialLabel}>Instagram</span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <div className={styles.col}>
                        <div className={styles.colTitle}>{t('footer.navigation')}</div>
                        <Link className={styles.link} to="/">{t('Home')}</Link>
                        <Link className={styles.link} to="/product">{t('Product')}</Link>
                        <Link className={styles.link} to="/contact">{t('Contact')}</Link>
                        <Link className={styles.link} to="/faq">{t('Faq')}</Link>
                    </div>

                    {/* Legal */}
                    <div className={styles.col}>
                        <div className={styles.colTitle}>{t('footer.legal')}</div>
                        <Link className={styles.link} to="/impressum">{t('footer.imprint')}</Link>
                        <Link className={styles.link} to="/privacy">{t('footer.privacy')}</Link>
                        <Link className={styles.link} to="/terms">{t('footer.term')}</Link>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.newsCol}>
                        <div className={styles.colTitle}>{t('footer.newsTitle')}</div>
                        <p className={styles.newsText}>{t('footer.newsText')}</p>

                        <form className={styles.form} onSubmit={onSubmit}>
                            <input
                                className={styles.input}
                                type="email"
                                placeholder={t('footer.emailPlaceholder')}
                                required
                                value={email}
                                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                            />
                            <button className={styles.submit} type="submit" aria-label="Submit">
                                <img className={styles.arrow} src={arrow} alt="" aria-hidden="true"></img>
                            </button>
                        </form>
                        {toast && (
                            <div
                                className={`${styles.toast} ${
                                    toast.type === 'success' ? styles.toastSuccess : styles.toastError
                                }`}
                                role="status"
                                aria-live="polite">
                                {toast.message}
                                <button
                                    type="button"
                                    className={styles.toastClose}
                                    onClick={() => setToast(null)}
                                    aria-label={t('footer.close')}>
                                    <img src="../assets/close.svg" alt="" />
                                </button>
                            </div>
                        )}

                        <div className={styles.note}>{t('footer.newsNote')}</div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>© {new Date().getFullYear()} SLEEM</span>
                    <span>{t('footer.vat')}</span>
                </div>
            </div>
        </footer>
    )
}
