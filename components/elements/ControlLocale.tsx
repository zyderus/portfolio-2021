import styles from '../../styles/ControlNavigation.module.css'
import { useContext, useState, useEffect, useRef, SyntheticEvent } from 'react'
import Link from 'next/link'
import { LocaleContext } from '../Layout'

const ControlLocale = () => {
  const { defaultLocale, locale, locales, pathname, asPath, push } = useContext(LocaleContext)
  const [userLang, setUserLang] = useState()
  const [isSelected, setIsSelected] = useState(false)

  const handleLangReset = () => {
    setIsSelected(false)
  }

  const handleLangSelect = () => {
    setIsSelected(true)
  }

  const setLang = (lang: any) => {
    localStorage.setItem('lang', lang)
  }

  const getLang = () => {
    const lang: any = localStorage.getItem('lang')
    if (!lang || lang == 'null') {
      setIsSelected(false)
    } else {
      setUserLang(lang)
      setIsSelected(true)
      push(pathname, asPath, { locale: lang, scroll: false })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getLang(), [])
  useEffect(() => {
    if (isSelected) {
      setLang(locale)
    } else {
      setLang(null)
    }
  }, [locale, isSelected])

  return (
    <ul className={`${styles.list} ${styles.locale}`}>
      <li className={styles.selection_item}>
        <Link href={asPath} locale={defaultLocale} scroll={false}>
          <a href={void 0} onClick={handleLangReset}>
            {locale.toUpperCase()}
            {isSelected ? <i className={`fas fa-lock ${styles.icon_lock}`}></i> : null}
          </a>
        </Link>
      </li>

      <ul className={styles.popup_list}>
        {locales.map((locale: any) => (
          <li className={styles.list_item} key={locale}>
            <Link href={asPath} locale={locale} scroll={false}>
              <a href={void 0} onClick={handleLangSelect}>
                {locale.toUpperCase()}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  )
}

export default ControlLocale
