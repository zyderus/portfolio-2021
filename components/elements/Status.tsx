import styles from '../../styles/Status.module.css'
import { loader } from '../../constants/icons_outline'
import { useState, useContext } from 'react'
import { LocaleContext } from '../Layout'

const Status = ({ status, name }: any) => {
  name = name.charAt(0).toUpperCase() + name.slice(1)
  const { t } = useContext(LocaleContext)
  let show
  switch (status) {
    case 'loading':
      show = <p>{loader}</p>
      break
    case 'success':
      show = (
        <>
          <p>
            <span className={styles.emoji}>✔️</span>
            {t.sendThanks1} {name} {t.sendThanks2}
          </p>
          <p>
            <span className={styles.emoji}>🖖</span>
            {t.sendWishes}
          </p>
        </>
      )
      break
    case 'error':
      show = (
        <>
          <p>
            <span className={styles.emoji}>❌</span> {t.sendError}
          </p>
          <p>{t.sendAgain}</p>
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
