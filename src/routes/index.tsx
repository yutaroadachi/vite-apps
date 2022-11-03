import { Link as RouterLink } from "react-router-dom"

export default function Top() {
  return (
    <>
      <h1>Top Page</h1>
      <RouterLink to="/shuffle">シャッフル</RouterLink>
    </>
  )
}
