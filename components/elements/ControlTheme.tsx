import styles from '../../styles/ControlTheme.module.css'
import { useState, useEffect } from 'react'

const ControlTheme = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)
  const setTheme = (theme: any) => {
    theme = theme ? 'dark' : ''
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }
  const getTheme = () => {
    const theme: any = localStorage.getItem('theme')
    setIsDark(theme)
  }

  useEffect(() => getTheme(), [])
  useEffect(() => setTheme(isDark), [isDark])

  return (
    <div className={styles.themeContainer}>
      <div className={styles.themeBtn} onClick={toggleTheme}>
        {isDark ? 'dark' : 'light'}
      </div>
    </div>
  )
}

export default ControlTheme
