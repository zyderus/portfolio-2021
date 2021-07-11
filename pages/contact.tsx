import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Contact() {
  return (
    <div className={styles.container + ' contact'}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='/assets/ku.jpg'>CONTACT PAGE</a>
        </h1>
      </main>
    </div>
  )
}
