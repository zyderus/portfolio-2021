import styles from '../../styles/ControlNavigation.module.css'
import { useContext, useState, useEffect, useRef, SyntheticEvent } from 'react'
import Link from 'next/link'
import { LocaleContext } from '../Layout'
import { translate } from '../../constants/icons_outline'

const ControlLocale = () => {
  const mobileMenu: any = useRef()
  const dropdown: any = useRef()
  const { defaultLocale, locale, locales, pathname, asPath, push, isUserSelected, setIsUserSelected } =
    useContext(LocaleContext)
  const [userLang, setUserLang] = useState()
  const [localeDropdown, setLocaleDropdown] = useState(false)
  const handleLangReset = () => setIsUserSelected(false)
  const handleLangSelect = () => setIsUserSelected(true)
  const toggleLocaleDropdown = () => setLocaleDropdown(!localeDropdown)
  const setLang = (lang: any) => localStorage.setItem('lang', lang)
  const getLang = () => {
    const lang: any = localStorage.getItem('lang')
    if (!lang || lang == 'null') {
      setIsUserSelected(false)
    } else {
      setUserLang(lang)
      setIsUserSelected(true)
      push(pathname, asPath, { locale: lang, scroll: false })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getLang(), [])
  useEffect(() => (isUserSelected ? setLang(locale) : setLang(null)), [locale, isUserSelected])

  // closes locale dropdown if clicked outside
  useEffect(() => {
    const isClickedOutside = (e: any) => {
      if (localeDropdown && dropdown.current && !mobileMenu.current.contains(e.target)) setLocaleDropdown(false)
    }
    document.addEventListener('mousedown', isClickedOutside)
    return () => document.removeEventListener('mousedown', isClickedOutside)
  }, [localeDropdown])

  const localeList = locales.map((locale: any) => (
    <li className={styles.list_item} key={locale}>
      <Link href={asPath} locale={locale} scroll={false}>
        <a href={void 0} onClick={handleLangSelect}>
          {locale.toUpperCase()}
        </a>
      </Link>
    </li>
  ))

  return (
    <>
      <div ref={mobileMenu} className={styles.mobile_menu}>
        <a href={void 0} onClick={toggleLocaleDropdown}>
          {translate}
        </a>

        {localeDropdown && (
          <ul ref={dropdown} className={styles.dropdown} onClick={() => setLocaleDropdown(false)}>
            {localeList}
          </ul>
        )}
      </div>

      {localeDropdown && <div className={styles.locale_overlay}></div>}

      <ul className={`${styles.list} ${styles.locale}`}>
        <li className={styles.selection_item}>
          <Link href={asPath} locale={defaultLocale} scroll={false}>
            <a href={void 0} onClick={handleLangReset}>
              {locale.toUpperCase()}
              {isUserSelected ? <i className={`fas fa-lock ${styles.icon_lock}`}></i> : null}
            </a>
          </Link>
        </li>

        <ul className={styles.popup_list}>{localeList}</ul>
      </ul>
    </>
  )
}

export default ControlLocale
