import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDirectory = path.join(process.cwd(), 'public/images/cards')
  const filenames = fs.readdirSync(imagesDirectory)
  const images = filenames.map(name => `/images/cards/${name}`)
  res.status(200).json(images)
}