import { ErrorFallback } from "@/components/ErrorFallback"
import "@/styles/global.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/700.css"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Link as RouterLink, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-base">
      <header className="flex justify-center items-center h-[64px] bg-main text-white">
        <RouterLink to="/" className="logo no-underline text-white">
          adachi
        </RouterLink>
      </header>
      <main className="flex-grow">
        <div className="w-[768px] px-4 py-8 mx-auto">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback="Loading...">
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
      <footer className="bg-main text-white text-center py-8 space-y-8">
        <RouterLink to="/" className="logo no-underline text-white">
          adachi
        </RouterLink>
        <div>Copyright© adachi All Rights Reserved.</div>
      </footer>
    </div>
  )
}
