import styles from '../styles/Layout.module.css'
import { createContext } from 'react'
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

type Props = { children: JSX.Element | JSX.Element[] | null }

const Layout: React.FC<Props> = ({ children }) => {
  const { defaultLocale, locale, locales, pathname, asPath, push, t } = useLocaleRouter()

  return (
    <LocaleContext.Provider
      value={{
        defaultLocale,
        locale,
        locales,
        pathname,
        asPath,
        push,
        t,
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
  )
}

export default Layout
