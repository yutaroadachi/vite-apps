import { lazy } from "react"
import { RouteObject } from "react-router-dom"
import Layout from "./layout"

const Top = lazy(() => import("./"))
const Shuffle = lazy(() => import("./shuffle"))

const _DevLayout = lazy(() => import("./_/dev/layout"))
const _DevTop = lazy(() => import("./_/dev"))

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
      {
        path: "_/dev",
        element: <_DevLayout />,
        errorElement: <div>Something went wrong</div>,
        children: [
          {
            index: true,
            element: <_DevTop />,
          },
        ],
      },
    ],
  },
]

export default routes
