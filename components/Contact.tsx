import styles from '@/assets/styles/Contact.module.scss';

export default function Features() {
  return (
    <section id='contact'>
      <div className={styles.content}>
        <h1>Contact me</h1>
        <p>
          If you have a question about how I can help your project or you just
          want to say hi, then smash that click button below and get in touch
          <span className={styles.emoji}>😄</span>
        </p>
        <button className={styles.button}>Click</button>
      </div>
    </section>
  );
}
