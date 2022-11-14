import CharacterItem from './character-item'
import type { Character } from '@/models/character'
import styles from '@/styles/characters.module.css'

interface Props {
  characters: Character[]
}

const Characters = ({ characters }: Props) => {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </div>
  )
}

export default Characters
