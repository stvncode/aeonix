import { useEffect, useState } from "react"

export const TypeWriter = ({
  text,
  delay,
  onComplete,
}: {
  text: string
  delay: number
  onComplete?: () => void
}) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text, onComplete])

  useEffect(() => {
    if (currentIndex >= text.length) {
      onComplete?.()
    }
  }, [currentIndex, text.length, onComplete])

  return <span>{currentText}</span>
}
