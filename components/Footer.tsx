import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.year}>&copy; {new Date('2021-07-01').getFullYear()}</p>
      <p className={styles.small}>by Rustam Ziyadov</p>
    </div>
  )
}

export default Footer
