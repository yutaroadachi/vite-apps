import { ReactNode } from "react"
import { Link as RouterLink } from "react-router-dom"

export default function Top() {
  return (
    <div className="space-y-4">
      <h1 className="text-main">Vite Apps</h1>
      <ul className="list-disc list-inside">
        {apps.map((app) => {
          return (
            <li key={app.to}>
              <RouterLink to={app.to}>{app.children}</RouterLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

type App = {
  to: string
  children: ReactNode
}

const apps: App[] = [
  {
    to: "shuffle",
    children: "Shuffle",
  },
]
