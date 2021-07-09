import styles from '../styles/Navbar.module.css'
import { useState } from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.navlogo}>[BrandLogo]</a>
        </Link>
        <ul className={!isOpen ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
          <li className={styles.navitem}>
            <Link href='/'>
              <a className={styles.navlink}>Home</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/about'>
              <a className={styles.navlink}>About</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/contact'>
              <a className={styles.navlink}>Contact</a>
            </Link>
          </li>
        </ul>
        <button className={!isOpen ? styles.hamburger : styles.hamburger + ' ' + styles.active} onClick={openMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
