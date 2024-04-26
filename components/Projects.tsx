import styles from '@/assets/styles/Projects.module.scss';
import { projects } from '@/constants/projects';

export default function Projects() {
  return (
    <section id='projects'>
      <div className={styles.content}>
        <h1>Other Things I&apos;ve made</h1>
        <ul>
          {projects.slice(3).map(({ title }, idx) => (
            <li key={idx}>{title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
