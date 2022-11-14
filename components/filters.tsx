import Filter from '@/components/filter'
import { statusOptions, genderOptions } from '@/constants/filters-options'
import type { SelectChangeEvent } from '@/models/types'
import styles from '@/styles/filters.module.css'

interface Props {
  handleStatus: (e: SelectChangeEvent) => void
  handleGender: (e: SelectChangeEvent) => void
}

const Filters = ({ handleStatus, handleGender }: Props) => (
  <div className={styles.filters}>
    <h2>Filter</h2>
    <div className={styles.filtersWrapper}>
      <Filter
        handleFilter={handleStatus}
        label='Status'
        id='status'
        options={statusOptions}
      />
      <Filter
        handleFilter={handleGender}
        label='Gender'
        id='gender'
        options={genderOptions}
      />
    </div>
  </div>
)

export default Filters
