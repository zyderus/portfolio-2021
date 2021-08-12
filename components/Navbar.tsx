import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect, useRef, useContext } from 'react'
import Button from './elements/Button'
import ControlTheme from './elements/ControlTheme'
import ControlLocale from './elements/ControlLocale'
import { external_link, menu, x } from '../constants/icons_outline'
import { LocaleContext } from './Layout'

const Navbar = () => {
  const { t } = useContext(LocaleContext)
  const navMenu: any = useRef()
  const xclose: any = useRef()
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showButton = () => (window.innerWidth <= 768 ? setButton(false) : setButton(true))

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', showButton)
  }

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => window.addEventListener('scroll', handleScroll), [])
  useEffect(() => showButton(), [])
  useEffect(() => {
    if (window.innerWidth > 768) closeMobileMenu()
  })
  useEffect(() => {
    if (click) {
      document.querySelector('body')!.style.overflow = 'hidden'
      // document.querySelector('body')!.style.marginRight = '10px'
    } else {
      document.querySelector('body')!.style.overflow = 'unset'
      // document.querySelector('body')!.style.marginRight = 'unset'
    }
  }, [click])

  useEffect(() => {
    const isClickedOutside = (e: any) => {
      if (click && navMenu.current && !navMenu.current.contains(e.target) && !xclose.current.contains(e.target))
        setClick(false)
    }
    document.addEventListener('mousedown', isClickedOutside)
    return () => document.removeEventListener('mousedown', isClickedOutside)
  }, [click])

  return (
    <>
      <nav className={styles.navbar + ' ' + (isScrolled && styles.scrolled)}>
        <div className={styles.logoContainer}>
          <Link href='/#'>
            <a onClick={closeMobileMenu}>
              <h1>RZ</h1>
            </a>
          </Link>
        </div>

        <div
          ref={xclose}
          className={styles.menuIcon + ' ' + (isScrolled && styles.scrolled)}
          /* Compensate for scrollbar expire */
          // style={{ marginRight: click ? '10px' : 'unset' }}
          onClick={handleClick}
        >
          {click ? x : menu}
        </div>

        <ul ref={navMenu} className={click ? styles.navMenu + ' ' + styles.active : styles.navMenu}>
          {click && (
            <li className={styles.navControls}>
              <ControlTheme />
              <ControlLocale />
            </li>
          )}
          <li>
            <Link href='/#about'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                {t.about}
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#experience'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                {t.experience}
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#contact'>
              <a className={styles.navLinks} onClick={closeMobileMenu}>
                {t.contact}
              </a>
            </Link>
          </li>
          {click && (
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
          )}
          <li className={styles.navItem}>
            {button ? (
              <Link href={t.resumeLink}>
                <a target='_blank' className={`${styles.navLinks} ${styles.resumeButton}`} onClick={closeMobileMenu}>
                  <Button style={'outline'} size={'medium'}>
                    {t.resume}
                  </Button>
                </a>
              </Link>
            ) : (
              <Link href={t.resumeLink}>
                <a target='_blank' className={styles.navLinksMobile} onClick={closeMobileMenu}>
                  {t.resume}
                </a>
              </Link>
            )}
          </li>
        </ul>
        {click && <div className={styles.overlay}></div>}
      </nav>
    </>
  )
}

export default Navbar
