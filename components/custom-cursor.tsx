"use client"

import { useEffect, useRef } from "react"

const CLICKABLE_SELECTOR = "a, button, summary, [data-cursor-interactive='true']"
const THEME_SELECTOR = "[data-cursor-theme]"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)
  const yRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)")

    if (!mediaQuery.matches) {
      return
    }

    document.documentElement.classList.add("has-custom-cursor")

    const cursor = cursorRef.current

    if (!cursor) {
      return
    }

    const render = () => {
      cursor.style.transform = `translate3d(${xRef.current}px, ${yRef.current}px, 0) translate(-50%, -50%)`
      rafRef.current = null
    }

    const queueRender = () => {
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(render)
      }
    }

    const updateCursorState = (target: Element | null) => {
      const isClickable = Boolean(target?.closest(CLICKABLE_SELECTOR))
      const themedParent = target?.closest(THEME_SELECTOR)
      const theme = themedParent?.getAttribute("data-cursor-theme") === "dark"
        ? "dark"
        : "light"

      cursor.dataset.interactive = isClickable ? "true" : "false"
      cursor.dataset.theme = theme
    }

    const handlePointerMove = (event: PointerEvent) => {
      xRef.current = event.clientX
      yRef.current = event.clientY
      updateCursorState(document.elementFromPoint(event.clientX, event.clientY))
      cursor.style.opacity = "1"
      queueRender()
    }

    const handlePointerDown = () => {
      cursor.dataset.pressed = "true"
    }

    const handlePointerUp = () => {
      cursor.dataset.pressed = "false"
    }

    const handlePointerLeave = () => {
      cursor.style.opacity = "0"
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cursor.style.opacity = "0"
      }
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("pointerup", handlePointerUp)
    window.addEventListener("pointerleave", handlePointerLeave)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")

      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("pointerup", handlePointerUp)
      window.removeEventListener("pointerleave", handlePointerLeave)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
      data-interactive="false"
      data-pressed="false"
      data-theme="light"
    >
      <span className="custom-cursor__arrow">↗</span>
    </div>
  )
}
