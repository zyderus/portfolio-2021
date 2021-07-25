import styles from '../styles/Control.module.css'
import { useState, useEffect } from 'react'
import ControlLocale from './elements/ControlLocale'
import ControlTheme from './elements/ControlTheme'

const Control = () => {
  return (
    <div className={styles.Control}>
      <ul className={styles.container}>
        <li>
          <ControlTheme />
        </li>
        <li>
          <ControlLocale />
        </li>
      </ul>
    </div>
  )
}

export default Control
