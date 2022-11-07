import { ErrorFallback } from "@/components/ErrorFallback"
import { apiHelloPath } from "@/utils/path"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import useSWR from "swr"

export default function _DevTop() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback="Loading...">
        <Content />
      </Suspense>
    </ErrorBoundary>
  )
}

const Content = () => {
  const { data } = useSWR<Hello>(apiHelloPath(), fetcher, { suspense: true })

  return (
    <ul className="list-disc list-inside">
      <li>{data?.message}</li>
      <li>{data?.date.toString()}</li>
    </ul>
  )
}

type Hello = {
  message: string
  date: Date
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())
