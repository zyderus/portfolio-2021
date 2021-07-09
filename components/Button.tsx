import styles from '../styles/Button.module.css'
import Link from 'next/link'

export const Button: React.FC<any> = ({ children, onClick }) => {
  return (
    <>
      <Link href='/sign-up'>
        <a>
          <button className={[styles.btn, styles.btnOutline, styles.btnMedium].join(' ')} onClick={onClick}>
            {children}
          </button>
        </a>
      </Link>
    </>
  )
}
