import { useRouter } from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
import es from '../locales/es'

const useLocaleRouter = () => {
  const router = useRouter()
  const { locale, locales, asPath } = router
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
    locale,
    locales,
    asPath,
    t,
  }
}

export default useLocaleRouter
