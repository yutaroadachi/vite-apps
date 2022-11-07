import { ErrorFallback } from "@/components/ErrorFallback"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"

export default function _DevLayout() {
  return (
    <div className="space-y-4">
      <h1 className="text-main">For Developer</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
