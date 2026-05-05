import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE_OPTIONS } from '../config/languages'
import type { Language } from '../types/language'

export function useCurrentLanguage() {
    const { i18n } = useTranslation()

    const current = (i18n.resolvedLanguage || i18n.language || 'de') as Language

    const currentOption = useMemo(
        () => LANGUAGE_OPTIONS.find((o) => o.value === current) ?? LANGUAGE_OPTIONS[0],
        [current]
    )

    return { current, currentOption, changeLanguage: i18n.changeLanguage }
}
