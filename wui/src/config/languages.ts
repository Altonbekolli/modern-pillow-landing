import AL from '../assets/albania.png'
import DE from '../assets/germany.png'
import EN from '../assets/uk.png'
import type { LanguageOption } from '../types/language'

export const LANGUAGE_OPTIONS: LanguageOption[] = [
    { value: 'de', label: 'Deutsch', flag: DE },
    { value: 'en', label: 'English', flag: EN },
    { value: 'sq', label: 'Albania', flag: AL },
]
