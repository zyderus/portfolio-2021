import styles from '../styles/Layout.module.css'
import { createContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Control from './Control'
import Footer from '../components/Footer'
import useLocaleRouter from '../utilities/useLocaleRouter'

export const LocaleContext: any = createContext({
  defaultLocale: '',
  locale: '',
  locales: [],
  pathname: '',
  asPath: '',
  t: {},
})

export const ThemeContext: any = createContext({})

type Props = { children: JSX.Element | JSX.Element[] | null }

const Layout: React.FC<Props> = ({ children }) => {
  const { defaultLocale, locale, locales, pathname, asPath, push, t } = useLocaleRouter()
  const [isUserSelected, setIsUserSelected] = useState(false)
  const [autoTheme, setAutoTheme] = useState('light')
  const [themeName, setThemeName] = useState(autoTheme)
  const [isUserTheme, setIsUserTheme] = useState(false)

  return (
    <ThemeContext.Provider
      value={{
        autoTheme,
        themeName,
        setThemeName,
        isUserTheme,
        setIsUserTheme,
      }}
    >
      <LocaleContext.Provider
        value={{
          defaultLocale,
          locale,
          locales,
          pathname,
          asPath,
          push,
          t,
          isUserSelected,
          setIsUserSelected,
        }}
      >
        <div className={styles.wrapper}>
          <Navbar />
          <Control />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}

export default Layout
