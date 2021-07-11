import styles from '../styles/index.module.css'
import Hero from '../components/Hero'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <h1>WORK Section</h1>
      </section>
      <section>
        <h1>CONTACT Section</h1>
      </section>
    </>
  )
}
