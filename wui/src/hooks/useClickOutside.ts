import { useEffect, type RefObject } from 'react'

export function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T | null>,
    onClose: () => void,
    enabled: boolean
) {
    useEffect(() => {
        if (!enabled) return

        const handlePointerDown = (event: PointerEvent) => {
            const el = ref.current
            if (!el) return
            if (!el.contains(event.target as Node)) {
                onClose()
            }
        }

        document.addEventListener('pointerdown', handlePointerDown)
        return () => document.removeEventListener('pointerdown', handlePointerDown)
    }, [ref, onClose, enabled])
}
