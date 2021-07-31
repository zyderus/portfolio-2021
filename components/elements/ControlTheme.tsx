import styles from '../../styles/ControlNavigation.module.css'
import { useEffect, SyntheticEvent, useContext } from 'react'
import { moon, sun } from '../../constants/icons_outline'
import { ThemeContext } from '../Layout'

const ControlTheme = () => {
  const { autoTheme, themeName, setThemeName, isUserTheme, setIsUserTheme } = useContext(ThemeContext)

  const handleLight = () => {
    setThemeName('light')
    setIsUserTheme(true)
  }

  const handleDark = () => {
    setThemeName('dark')
    setIsUserTheme(true)
  }

  const handleThemeToggle = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
    setIsUserTheme(true)
  }

  const handleReset = (e: SyntheticEvent) => {
    e.preventDefault()
    setThemeName(autoTheme)
    setTheme(null)
    setIsUserTheme(false)
  }

  const setTheme = (theme: any) => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }

  const getTheme = () => {
    const theme: any = localStorage.getItem('theme')
    if (!theme || theme == 'null') {
      setIsUserTheme(false)
    } else {
      setThemeName(theme)
      setIsUserTheme(true)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getTheme(), [])
  useEffect(() => {
    console.log('useEefect')
    if (isUserTheme) {
      setTheme(themeName)
    }
  }, [themeName, isUserTheme])

  return (
    <>
      <div className={styles.mobile_menu}>
        <a href={void 0} onClick={handleThemeToggle}>
          {themeName === 'dark' ? moon : sun}
        </a>
      </div>

      <ul className={`${styles.list} ${styles.theme}`}>
        <li className={styles.selection_item}>
          <a onClick={handleReset}>
            {themeName === 'dark' ? moon : sun}
            {isUserTheme ? <i className={`fas fa-lock ${styles.icon_lock}`}></i> : null}
          </a>
        </li>
        <ul className={styles.popup_list}>
          <li className={styles.list_item}>
            <a onClick={handleDark}>{moon}</a>
          </li>
          <li className={styles.list_item}>
            <a onClick={handleLight}>{sun}</a>
          </li>
        </ul>
      </ul>
    </>
  )
}

export default ControlTheme
