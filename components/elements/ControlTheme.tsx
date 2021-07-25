import styles from '../../styles/ControlNavigation.module.css'
import { useState, useEffect } from 'react'

const ControlTheme = () => {
  let autoTheme = 'light'
  const [themeName, setThemeName] = useState(autoTheme)
  const [isUserTheme, setIsUserTheme] = useState(false)

  const handleLight = () => {
    setThemeName('light')
    setIsUserTheme(true)
  }
  const handleDark = () => {
    setThemeName('dark')
    setIsUserTheme(true)
  }
  const handleReset = () => {
    setThemeName(autoTheme)
    setTheme(null)
    setIsUserTheme(false)
  }

  // const toggleTheme = () => setIsDark(!isDark)
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

  useEffect(() => getTheme(), [])
  useEffect(() => {
    console.log('useEefect')
    if (isUserTheme) {
      setTheme(themeName)
    }
  }, [themeName, isUserTheme])

  return (
    <div className={styles.ControlTheme}>
      <ul className={styles.list}>
        <li className={styles.selection_item}>
          <a onClick={handleReset}>
            {themeName === 'dark' ? <i className='fas fa-moon'></i> : <i className='fas fa-sun'></i>}
            {isUserTheme ? <i className={`fas fa-lock ${styles.lock_icon}`}></i> : null}
          </a>
        </li>
        <ul className={styles.popup_list}>
          <li className={styles.list_item}>
            <a onClick={handleDark}>
              <i className='fas fa-moon'></i>
            </a>
          </li>
          <li className={styles.list_item}>
            <a onClick={handleLight}>
              <i className='fas fa-sun'></i>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default ControlTheme
