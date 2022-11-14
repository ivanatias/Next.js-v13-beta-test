import Image from 'next/image'
import styles from '@/styles/staticarticle.module.css'

interface Props {
  articleTitle: string
  articleBody: string
  articleImageUrl: string
}

const StaticArticle = ({
  articleTitle,
  articleBody,
  articleImageUrl
}: Props) => (
  <article>
    <div className={styles.articleContainer}>
      <h1 className='sectionTitle'>{articleTitle}</h1>
      <div className={styles.articleImageContainer}>
        <Image src={articleImageUrl} alt='Rick and Morty' fill />
      </div>
      <p className='paragraph'>{articleBody}</p>
    </div>
  </article>
)

export default StaticArticle
