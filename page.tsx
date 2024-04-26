import styles from '@/assets/styles/Index.module.scss';
import variables from '@/assets/styles/variables.module.scss';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* <h1 style={{ color: variables.primaryColor }}>Main Page</h1> */}
      <Hero />
      <About />
      <Features />
      <Projects />
      <Contact />
    </main>
  );
}
