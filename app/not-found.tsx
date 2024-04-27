import styles from '@/assets/styles/NotFound.module.scss';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <div className={styles.content}>
      <FaExclamationTriangle className={styles.icon} />
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link href='/'>Go Home</Link>
    </div>
  );
}
