import type { CSSProperties } from 'react'

export type CSSVar<T extends string> = CSSProperties & {
    [K in T]?: string | number
}
