import { clsx } from "clsx"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

export type LogoProps = Omit<RouterLinkProps, "to">

export const Logo = (props: LogoProps) => {
  const { className, ...other } = props

  return (
    <RouterLink to="/" className={clsx("logo", className)} {...other}>
      adachi
    </RouterLink>
  )
}
