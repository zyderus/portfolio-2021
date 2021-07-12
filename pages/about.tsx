import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function About() {
  return (
    <div className={styles.container + ' about'}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>ABOUT PAGE</a>
        </h1>
      </main>
    </div>
  )
}
