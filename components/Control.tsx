import styles from '../styles/Control.module.css';
import ControlLocale from './elements/ControlLocale';
import ControlTheme from './elements/ControlTheme';
import Link from 'next/link';
import { github, linkedin } from '../constants/icons_outline';

const Control = () => {
  return (
    <div className={styles.Control}>
      <ul className={styles.container}>
        <li className={styles.list_item}>
          <Link href='https://github.com/zyderus'>
            <a target='_blank'>{github}</a>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link href='https://www.linkedin.com/in/rustamziyodov/'>
            <a target='_blank'>{linkedin}</a>
          </Link>
        </li>
        <li className={styles.list_item}>
          <ControlTheme />
        </li>
        <li className={styles.list_item}>
          <ControlLocale />
        </li>
      </ul>
    </div>
  );
};

export default Control;
