import StaticArticle from '@/components/static-article'
import { firstArticle, secondArticle } from '@/constants/static-data'
import styles from '@/styles/home.module.css'

const HomePage = () => {
  return (
    <section className={styles.container}>
      <StaticArticle
        articleTitle={firstArticle.title}
        articleImageUrl={firstArticle.image}
        articleBody={firstArticle.body}
      />
      <StaticArticle
        articleTitle={secondArticle.title}
        articleImageUrl={secondArticle.image}
        articleBody={secondArticle.body}
      />
    </section>
  )
}

export default HomePage
