type Path = string

export const apiHelloPath = (): Path => `${apiOrigin}/api/hello`

const apiOrigin = import.meta.env.DEV ? "http://localhost:3000" : ""
