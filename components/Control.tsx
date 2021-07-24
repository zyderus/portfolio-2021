import styles from '../styles/Control.module.css'
import ControlLocale from './elements/ControlLocale'
import ControlTheme from './elements/ControlTheme'

const Control = () => {
  return (
    <div className={styles.Control}>
      <ControlTheme />
      <ControlLocale />
    </div>
  )
}

export default Control
