import styles from '../styles/Layout.module.css'
import { createContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Control from './Control'
import useLocaleRouter from '../utilities/useLocaleRouter'

export const LocaleContext: any = createContext({
  locale: '',
  locales: [],
  asPath: '',
  t: {},
})

type Props = { children: JSX.Element | JSX.Element[] }

const Layout: React.FC<Props> = ({ children }) => {
  const { locale, locales, asPath, t } = useLocaleRouter()

  return (
    <LocaleContext.Provider
      value={{
        locale,
        locales,
        asPath,
        t,
      }}
    >
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Navbar />
        </header>
        <div className={styles.content}>
          <div className={styles.main}>{children}</div>
        </div>
        <Control />
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </LocaleContext.Provider>
  )
}

export default Layout
