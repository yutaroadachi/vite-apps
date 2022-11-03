import { FallbackProps } from "react-error-boundary"

export type ErrorFallbackProps = FallbackProps

export const ErrorFallback = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return <div>Something went wrong</div>
}
