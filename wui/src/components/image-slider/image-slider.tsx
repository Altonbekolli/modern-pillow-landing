import { useEffect, useState } from 'react'
import styles from './image-slider.module.scss'
import type {ImageSliderProps} from "../../types/slider.ts";


export default function ImageSlider({slides, interval = 4000, altPrefix = 'Produktbild',}: ImageSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (slides.length <= 1 || isPaused) return

        const timer = window.setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, interval)

        return () => window.clearInterval(timer)
    }, [slides, interval, isPaused])

    return (
        <div className={styles.productVisual} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {slides.map((slide, index) => (
                <img
                    key={`${slide}-${index}`}
                    className={`${styles.productImg} ${index === currentSlide ? styles.active : ''}`}
                    src={slide}
                    alt={`${altPrefix} ${index + 1}`}
                />
            ))}
        </div>
    )
}