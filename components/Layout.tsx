import styles from '../styles/Layout.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = { children: JSX.Element | JSX.Element[] }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className={styles.content}>
        <div className={styles.main}>{children}</div>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
