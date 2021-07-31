import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from './Button'
import Control from './Control'
import ControlTheme from './elements/ControlTheme'
import ControlLocale from './elements/ControlLocale'
// import { moon, sun, external_link, menu, x, arrows_expand, translate } from '../constants/icons_solid'
import { moon, sun, external_link, menu, x, arrows_expand, translate } from '../constants/icons_outline'

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
  useEffect(() => {
    if (window.innerWidth > 768) closeMobileMenu()
  })
  useEffect(() => {
    console.log('click')
    if (click) {
      document.querySelector('body')!.style.overflow = 'hidden'
      document.querySelector('body')!.style.marginRight = '10px'
    } else {
      document.querySelector('body')!.style.overflow = 'unset'
      document.querySelector('body')!.style.marginRight = 'unset'
    }
  }, [click])

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <a onClick={closeMobileMenu}>
              <h1>RZ</h1>
            </a>
          </Link>
        </div>

        <div
          className={styles.menuIcon}
          style={{
            marginRight: click ? '10px' : 'unset',
          }}
          onClick={handleClick}
        >
          {click ? x : menu}
        </div>

        <ul className={click ? styles.navMenu + ' ' + styles.active : styles.navMenu}>
          {click ? (
            <li className={styles.navControls}>
              <ControlTheme />
              <div></div>
              <ControlLocale />
            </li>
          ) : null}
          <li>
            <Link href='/about'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                About
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/work'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                Experience
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/contact'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                Contact
              </a>
            </Link>
          </li>
          {click ? (
            <>
              <li className={styles.navItem}>
                <Link href='https://github.com/zyderus'>
                  <a target='_blank' className={styles.navLinks}>
                    Github <span>{external_link}</span>
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href='https://www.linkedin.com/in/rustamziyadov/'>
                  <a target='_blank' className={styles.navLinks}>
                    LinkedIn <span>{external_link}</span>
                  </a>
                </Link>
              </li>
            </>
          ) : null}
          <li className={styles.navItem}>
            {button ? (
              <Link href='/contact'>
                <a className={`${styles.navLinks} ${styles.resumeButton}`} onClick={closeMobileMenu}>
                  <Button style={'outline'} size={'medium'}>
                    Resume
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
        {click ? <div className={styles.overlay}></div> : null}
      </nav>
    </>
  )
}

export default Navbar
