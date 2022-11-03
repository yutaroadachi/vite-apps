import { Logo } from "@/components/Logo"
import "@/styles/global.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/700.css"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-base">
      <header className="flex justify-center items-center h-[64px] bg-main text-white">
        <Logo />
      </header>
      <main className="flex-grow">
        <div className="w-[768px] px-4 py-8 mx-auto">
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer className="bg-main text-white text-center py-8 space-y-8">
        <Logo />
        <div>Copyright© adachi All Rights Reserved.</div>
      </footer>
    </div>
  )
}
