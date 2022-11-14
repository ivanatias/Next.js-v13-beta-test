import type { FilterOption, SelectChangeEvent } from '@/models/types'
import styles from '@/styles/filter.module.css'

interface Props {
  id: string
  label: string
  options: FilterOption[]
  handleFilter: (e: SelectChangeEvent) => void
}

const Filter = ({ id, label, options, handleFilter }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={handleFilter} className={styles.filter}>
        {options.map(({ text, value }) => (
          <option value={value} key={text}>
            {text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
