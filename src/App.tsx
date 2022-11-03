import { Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import "./styles/global.css"

const router = createBrowserRouter(routes)

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  )
}
