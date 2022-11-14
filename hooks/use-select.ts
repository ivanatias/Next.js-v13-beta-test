import { useState } from 'react'
import type { SelectChangeEvent } from '@/models/types'

export const useSelect = () => {
  const [value, setValue] = useState('')

  const handleSelect = (e: SelectChangeEvent) => {
    setValue(e.target.value)
  }

  return { value, handleSelect }
}
