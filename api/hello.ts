import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).end()
    return
  }

  res.setHeader(
    "Cache-Control",
    "max-age=0, s-maxage=60, stale-while-revalidate"
  )
  res.status(200).json({
    message: `Hello ${process.env.APP_ENV}!`,
    date: new Date(),
  })
}
