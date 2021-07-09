import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p>Designed & Build by Rustam Ziyadov</p>
      <p className={styles.year}>{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
