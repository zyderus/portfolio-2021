import styles from '../styles/Layout.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = { children: JSX.Element | JSX.Element[] }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <section className={styles.content}>{children}</section>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </section>
  )
}

export default Layout
