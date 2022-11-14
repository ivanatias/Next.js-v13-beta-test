import { useInfiniteQuery } from '@tanstack/react-query'
import { getCharacters } from '@/services/get-characters'
import { charactersFirstPage } from '@/constants/api-constants'

interface UseCharacters {
  statusValue: string
  genderValue: string
}

export const useCharacters = ({ statusValue, genderValue }: UseCharacters) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['characters', statusValue, genderValue],
      async ({ pageParam = charactersFirstPage }) =>
        await getCharacters({
          page: pageParam,
          status: statusValue,
          gender: genderValue
        }),
      {
        getNextPageParam: (lastPage) => {
          const { next } = lastPage.info
          return next ?? undefined
        }
      }
    )

  return { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage }
}
