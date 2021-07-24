import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from './Button'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showButton = () => (window.innerWidth <= 768 ? setButton(false) : setButton(true))

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', showButton)
  }

  useEffect(() => showButton(), [])

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <a className={styles.navbarLogo} onClick={closeMobileMenu}>
              RZ <i className='fab fa-typo3'></i>
            </a>
          </Link>

          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>

        <ul className={click ? styles.navMenu + ' ' + styles.active : styles.navMenu}>
          <li className={styles.navItem}>
            <Link href='/about'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                .about()
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/work'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                .experience()
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/contact'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                .contact()
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            {button ? (
              <Link href='/contact'>
                <a className={`${styles.navLinks} ${styles.resumeButton}`} onClick={closeMobileMenu}>
                  <Button style={'outline'} size={'medium'}>
                    resume
                  </Button>
                </a>
              </Link>
            ) : (
              <Link href='/resume'>
                <a className={styles.navLinksMobile} onClick={closeMobileMenu}>
                  Resume
                </a>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
