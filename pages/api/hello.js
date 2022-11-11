// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
  let data = fetch(`/nine4-2/datasource/data.json`)
  res.json(data)
}
