import styles from '../styles/Control.module.css'
import { useState, useEffect } from 'react'
import ControlLocale from './elements/ControlLocale'
import ControlTheme from './elements/ControlTheme'
import Link from 'next/link'

const Control = () => {
  return (
    <div className={styles.Control}>
      <ul className={styles.container}>
        <li className={styles.list_item}>
          <Link href='https://github.com/zyderus'>
            <a target='_blank'>
              <i className='fab fa-github'></i>
            </a>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link href='https://www.linkedin.com/in/rustamziyadov/'>
            <a target='_blank'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </Link>
        </li>
        <li className={styles.list_item}>
          <ControlTheme />
        </li>
        <li className={styles.list_item}>
          <ControlLocale />
        </li>
      </ul>
    </div>
  )
}

export default Control
