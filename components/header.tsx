import Link from 'next/link'
import Image from 'next/image'
import links from '@/constants/links'
import styles from '@/styles/header.module.css'

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navbar}>
      <Image
        src='/showlogo.png'
        alt='Rick and Morty Logo'
        width={140}
        height={80}
        className={styles.logo}
      />
      <ul className={styles.navlinks}>
        {links.map(({ path, label }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
