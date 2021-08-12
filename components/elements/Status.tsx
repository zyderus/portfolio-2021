import styles from '../../styles/Status.module.css'
import { loader } from '../../constants/icons_outline'
import { useContext } from 'react'
import { LocaleContext } from '../Layout'

const Status = ({ status, name }: any) => {
  name = name && name.charAt(0).toUpperCase() + name.slice(1)
  const nameLastChar = name && name[name.length - 1]
  const { t } = useContext(LocaleContext)
  let show
  switch (status) {
    case 'loading':
      show = <p>{loader}</p>
      break
    case 'success':
      show = (
        <>
          <div>
            <span className={styles.emoji}>✔️</span>
            {t.sendThanks1} {name}{' '}
            {nameLastChar === 'а' || nameLastChar === 'я' ? t['sendThanks2' + 'female'] : t.sendThanks2}
          </div>
          <div>
            <span className={styles.emoji}>🖖</span>
            {t.sendWishes}
          </div>
        </>
      )
      break
    case 'error':
      show = (
        <>
          <div>
            <span className={styles.emoji}>❌</span> {t.sendError}
          </div>
          <div>{t.sendAgain}</div>
        </>
      )
      break
    default:
      null
  }

  return (
    <div className={styles.status}>
      <div className={styles.result}>{show}</div>
    </div>
  )
}

export default Status
