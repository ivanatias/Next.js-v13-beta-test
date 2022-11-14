import Image from 'next/image'
import Link from 'next/link'
import type { Character } from '@/models/character'
import styles from '@/styles/characteritem.module.css'

interface Props {
  character: Character
}

const CharacterItem = ({ character }: Props) => (
  <Link href={`/characters/${character.id}`}>
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
        />
      </div>
      <h3>{character.name}</h3>
    </div>
  </Link>
)

export default CharacterItem
