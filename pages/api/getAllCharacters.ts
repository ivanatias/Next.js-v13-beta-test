import type { NextApiResponse, NextApiRequest } from 'next'
import type { Characters } from '@/models/character'
import { isString } from '@/utils/assert-string'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Characters | string>
) => {
  if (req.method !== 'POST') return res.status(405).send('Method not supported')

  const { page, status, gender } = req.body

  if (!isString(page) || !isString(status) || !isString(gender)) {
    return res.status(400).end()
  }

  const response = await fetch(`${page}&status=${status}&gender=${gender}`)

  if (!response.ok)
    return res
      .status(response.status)
      .send(`Could not retrieve characters: ${response.status}`)

  const charactersData = await response.json()
  res.json(charactersData)
}
