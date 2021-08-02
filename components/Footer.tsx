import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p>by Rustam Ziyadov</p>
      <p className={styles.year}>&copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
