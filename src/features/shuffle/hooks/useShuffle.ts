import { ChangeEvent, useCallback, useEffect, useState } from "react"

export const useShuffle = () => {
  const [input, setInput] = useState("")
  const [urlForCopy, setUrlForCopy] = useState("")
  const [result, setResult] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get("q")
    if (q) {
      const initialInput = q.split("-").join("\n")
      setInput(initialInput)

      const initialUrlForCopy = buildUrlForCopy(initialInput)
      setUrlForCopy(initialUrlForCopy)

      const initialResult = buildResult(initialInput)
      setResult(initialResult)
    }
  }, [])

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value)
    },
    []
  )
  const shuffle = useCallback((input: string) => {
    const urlForCopy = buildUrlForCopy(input)
    setUrlForCopy(urlForCopy)

    const result = buildResult(input)
    setResult(result)
  }, [])

  return { input, urlForCopy, result, handleChangeInput, shuffle }
}

const buildUrlForCopy = (input: string) => {
  if (!input) return ""

  const inputArray = inputStringToArray(input)
  const url = new URL(window.location.href)
  url.search = ""
  url.hash = ""
  const q = inputArray.join("-")

  return `${url.href}?q=${q}`
}

const buildResult = (input: string) => {
  if (!input) return ""

  const inputArray = inputStringToArray(input)
  const shuffledArray = shuffleArray(inputArray)

  return shuffledArray.join("\n")
}

const inputStringToArray = (input: string) => input.split(/\n|\r\n/)

/** @see https://qiita.com/pure-adachi/items/77fdf665ff6e5ea22128#%E3%83%80%E3%82%B9%E3%83%86%E3%83%B3%E3%83%95%E3%82%A7%E3%83%AB%E3%83%89%E3%81%AE%E6%89%8B%E6%B3%95 */
const shuffleArray = <T>(array: T[]) => {
  const copiedArray = [...array]
  for (let i = copiedArray.length; 1 < i; i--) {
    const j = Math.floor(Math.random() * i)
    ;[copiedArray[j], copiedArray[i - 1]] = [copiedArray[i - 1], copiedArray[j]]
  }

  return copiedArray
}
