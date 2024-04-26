import styles from '@/assets/styles/Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.content}>
        <p className={styles.intro}>
          <span className={styles.emoji}>👋</span> Hi, my name is
        </p>
        <h1 className={styles.title}>Rustam Ziyadov,</h1>
        <h2 className={styles.subtitle}>and I build things with code.</h2>
        <p className={styles.description}>
          I am a software engineer. I specialize in the development of
          functional and human-friendly applications.
        </p>
        <button className={styles.button}>Ping me</button>
      </div>
    </section>
  );
}
