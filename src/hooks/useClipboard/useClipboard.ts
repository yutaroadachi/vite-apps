import copy from "copy-to-clipboard"
import { useCallback, useEffect, useState } from "react"

/** 任意のテキストをクリップボードにコピーします
 *
 * @see https://github.com/chakra-ui/chakra-ui/blob/ed7f878b3463cc5a83d67a7aed6dd6fc5a0570f6/packages/legacy/hooks/src/use-clipboard.ts */
export const useClipboard = (text: string) => {
  const [hasCopied, setHasCopied] = useState(false)

  const onCopy = useCallback(() => {
    const didCopy = copy(text)
    setHasCopied(didCopy)
  }, [text])

  useEffect(() => {
    let timeoutId: number | null = null

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false)
      }, 1500)
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [hasCopied])

  return { value: text, hasCopied, onCopy }
}
