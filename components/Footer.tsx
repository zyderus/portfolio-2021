import styles from '@/assets/styles/Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.year}>&copy; {new Date().getFullYear()}</p>
      <p className={styles.small}>by Rustam Ziyadov</p>
    </div>
  );
}
