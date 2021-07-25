import { useRouter } from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
import es from '../locales/es'

const useLocaleRouter = () => {
  const router = useRouter()
  const { defaultLocale, locale, locales, pathname, asPath, push } = router
  let t
  switch (locale) {
    case 'ru':
      t = ru
      break
    case 'es':
      t = es
      break
    default:
      t = en
  }

  return {
    defaultLocale,
    locale,
    locales,
    pathname,
    asPath,
    push,
    t,
  }
}

export default useLocaleRouter
