import { API_URL } from '@/constants/api-constants'
import type { Character } from '@/models/character'

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${API_URL}/character/${id}`, {
    cache: 'no-store'
  })

  if (!response.ok) throw new Error('Could not retrieve character')

  return response.json()
}
