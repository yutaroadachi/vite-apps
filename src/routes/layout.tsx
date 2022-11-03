import { Suspense } from "react"
import { Link as RouterLink, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <main>
      <header>
        <RouterLink to="/">adachi</RouterLink>
      </header>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </main>
  )
}
