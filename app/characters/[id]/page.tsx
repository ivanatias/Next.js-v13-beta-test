import Image from 'next/image'
import { getCharacter } from '@/services/get-character'
import styles from '@/styles/details.module.css'

interface Props {
  params: {
    id: string
  }
}

const CharacterPage = async ({ params: { id } }: Props) => {
  const character = await getCharacter(id)
  return (
    <div className={styles.container}>
      <Image
        src={character.image}
        width={300}
        height={300}
        alt={character.name}
      />
      <div className={styles.description}>
        <div className={styles.characterNameWrapper}>
          <h2>{character.name}</h2>
        </div>
        <div className={styles.infoDetailsContainer}>
          <div className={styles.infoDetailsRow}>
            <p>
              <span>Status:</span>
              {character.status}
            </p>
            <p>
              <span>Species:</span>
              {character.species}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterPage
