import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'

export default function Contact() {
  return (
    <>
      <section className='intro'>
        <Intro />
      </section>
      <section className='about'>
        <h1>ABOUT Section</h1>
      </section>
      <section className='experience'>
        <h1>EXPERIENCE Section</h1>
      </section>
      <section className='work'>
        <h1>WORK Section</h1>
      </section>
      <section className='contact'>
        <h1>CONTACT Section</h1>
      </section>
    </>

    // <div className={styles.container + ' experience'}>
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href='https://nextjs.org'>EXPERIENCE PAGE</a>
    //     </h1>
    //   </main>
    // </div>
  )
}
