import styles from '../styles/index.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import WorkOther from '../components/WorkOther'
import Contact from '../components/Contact'

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
        <Work />
      </section>
      <section>
        <WorkOther />
      </section>
      <section>
        <Contact />
      </section>
    </>
  )
}
