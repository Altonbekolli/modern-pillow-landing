import styles from './theme-toggle.module.scss'
import type { ThemeProps } from '../../types/theme'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

export default function ThemeToggle({ theme, setTheme }: ThemeProps) {
    return (
        <button
            className={styles.themeBtn}
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Theme wechseln"
            title="Theme wechseln">
                    <img className={styles.themeIcon} src={theme === 'dark' ? sun : moon} alt="" aria-hidden="true"></img>
        </button>
    )
}
