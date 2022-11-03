import { lazy } from "react"
import { RouteObject } from "react-router-dom"
import Layout from "./layout"

const Top = lazy(() => import("./"))
const Shuffle = lazy(() => import("./shuffle"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        index: true,
        element: <Top />,
      },
      {
        path: "shuffle",
        element: <Shuffle />,
      },
    ],
  },
]

export default routes
