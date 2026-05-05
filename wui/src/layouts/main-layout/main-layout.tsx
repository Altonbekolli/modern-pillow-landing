import { Outlet, Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useState } from 'react'
import ThemeToggle from '../../components/theme-toggle/theme-toggle'
import LanguageToggle from '../../components/language-toggle/language-toggle'
import styles from './main-layout.module.scss'
import logoDark from '../../assets/logoBlack.png'
import logoWhite from '../../assets/logoWhite.png'
import { useTranslation } from 'react-i18next'
import type {ThemeProps} from "../../types/theme.ts";
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import Footer from '../../sections/footer/footer'
import closePrime from '../../assets/closePrime.svg'
import close from '../../assets/close.svg'

export default function MainLayout({ theme, setTheme}: ThemeProps) {
    const [menuOpen, setMenuOpen] = useState(false)
    const { t } = useTranslation()

    const NAV_ITEMS = [
        { label: t('Home'), href: '/' },
        { label: t('Product'), href: '/product' },
        { label: t('Contact'), href: '/contact' },
        { label: t('Faq'), href: '/faq' },
    ]

    useEscapeKey(() => setMenuOpen(false), menuOpen)
    useLockBodyScroll(menuOpen)

    return (
        <div className={styles.shell}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <Link className={styles.brand} to="/" aria-label={t('nav.home')}>
                            <img
                                className={styles.logo}
                                src={theme === 'dark' ? logoWhite : logoDark}
                                alt="Sleem"
                            />
                        </Link>

                        <div className={styles.navLinks}>
                            {NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className={styles.navActions}>
                            <a
                                className={styles.navCta}
                                href="https://www.amazon.de/dp/B0G822BN62"
                                target="_blank"
                                rel="noreferrer">
                                {t('hero.preorder')}
                            </a>

                            <LanguageToggle />
                            <ThemeToggle theme={theme} setTheme={setTheme} />

                            <button
                                className={styles.burger}
                                onClick={() => setMenuOpen((v) => !v)}
                                aria-expanded={menuOpen}
                                aria-label="Menü öffnen"
                                type="button"
                            >
                                <span className={styles.burgerLines} aria-hidden="true" />
                            </button>
                        </div>
                    </nav>
                </div>

                {/* mobile */}
                <div className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}>
                    <button
                        className={styles.mobileBackdrop}
                        onClick={() => setMenuOpen(false)}
                        aria-label="Menü schließen"
                        type="button"
                    />
                    <div className={styles.mobilePanel} role="dialog" aria-modal="true">
                        <div className={styles.mobileTop}>
                            <h4 className={styles.mobileTitle}>Navigation</h4>
                            <button className={styles.mobileClose} onClick={() => setMenuOpen(false)} type="button">
                                <img className="" src={theme === 'dark' ? close : closePrime} alt=""></img>
                            </button>
                        </div>

                        <div className={styles.mobileLinks}>
                            {NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        isActive ? `${styles.mobileLink} ${styles.mobileActive}` : styles.mobileLink}>
                                    {item.label}
                                </NavLink>


                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                    <Outlet />
            </main>
            <Footer theme={theme} />
        </div>
    )
}
