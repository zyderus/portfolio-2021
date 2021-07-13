import styles from '../styles/index.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Features'
import Projects from '../components/Projects'
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
      <section id='work'>
        <Work />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </>
  )
}
