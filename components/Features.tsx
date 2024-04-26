import styles from '@/assets/styles/Features.module.scss';
import { projects } from '@/constants/projects';

export default function Features() {
  return (
    <section id='experience'>
      <div className={styles.content}>
        <h1>Some of my work</h1>
        <ul>
          {projects.slice(0, 3).map(({ title }, idx) => (
            <li key={idx}>{title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
