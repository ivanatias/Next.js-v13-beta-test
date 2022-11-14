'use client'

import Filters from './filters'
import Characters from '@/components/characters'
import Loading from '@/components/loading'
import { useSelect } from '@/hooks/use-select'
import { useCharacters } from '@/hooks/use-characters'
import styles from '@/styles/characterscontainer.module.css'

const CharactersContainer = () => {
  const { value: statusValue, handleSelect: handleStatus } = useSelect()
  const { value: genderValue, handleSelect: handleGender } = useSelect()
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCharacters({ statusValue, genderValue })

  const handleFetchNextPage = async () => fetchNextPage()

  return (
    <div className={styles.container}>
      <Filters handleStatus={handleStatus} handleGender={handleGender} />
      {isLoading ? (
        <Loading />
      ) : (
        data?.pages.map((characters, index) => (
          <Characters characters={characters.results} key={index} />
        ))
      )}
      {!isLoading && (
        <button
          className={styles.loadMoreBtn}
          onClick={handleFetchNextPage}
          disabled={hasNextPage === false}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage === true
            ? 'Show me more characters!'
            : 'No more characters'}
        </button>
      )}
    </div>
  )
}

export default CharactersContainer
