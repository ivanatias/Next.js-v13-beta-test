import styles from '@/styles/detailslayout.module.css'

interface Props {
  children: React.ReactNode
}

const CharacterDetailsLayout = ({ children }: Props) => (
  <section className={styles.container}>
    <h1 className='sectionTitle'>Know the character!</h1>
    {children}
  </section>
)

export default CharacterDetailsLayout
