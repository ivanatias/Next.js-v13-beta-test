import type { Characters } from '@/models/character'
import { charactersFirstPage } from '@/constants/api-constants'

interface GetCharacters {
  status?: string
  gender?: string
  page: string
}

export const getCharacters = async ({
  status = '',
  gender = '',
  page = charactersFirstPage
}: GetCharacters): Promise<Characters> => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status, gender, page })
  }

  const response = await fetch('/api/getAllCharacters', config)

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText)
  }

  return response.json()
}
