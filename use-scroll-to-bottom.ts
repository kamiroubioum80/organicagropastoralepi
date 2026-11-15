
import { useCallback, useEffect, useRef } from "react"

export const useScrollToBottom = <T extends readonly unknown[]>(
  dependencies: T,
) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    })
  }, [])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      scrollToBottom()
    })

    return () => cancelAnimationFrame(frameId)
  }, [...dependencies, scrollToBottom])

  return { bottomRef, scrollToBottom }
}
