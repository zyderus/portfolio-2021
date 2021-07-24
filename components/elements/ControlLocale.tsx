import styles from '../../styles/ControlLocale.module.css'
import { useContext } from 'react'
import Link from 'next/link'
import { LocaleContext } from '../Layout'

const ControlLocale = () => {
  const { locale, locales, asPath } = useContext(LocaleContext)

  return (
    <div className={styles.ControlLocale}>
      <ul>
        {locales.map((locale: any) => (
          <li key={locale}>
            <Link href={asPath} locale={locale}>
              <a>{locale.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ControlLocale
