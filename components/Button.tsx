import styles from '../styles/Button.module.css'
import Link from 'next/link'

const STYLES = ['solid', 'outline']
const SIZES = ['small', 'medium', 'large']

const Button: React.FC<any> = ({ style, size, click, children }) => {
  const checkStyle = STYLES.includes(style) ? styles[style] : STYLES[0]
  const checkSize = SIZES.includes(size) ? styles[size] : SIZES[0]

  return (
    <>
      <button className={[styles.btn, checkStyle, checkSize].join(' ')} onClick={click}>
        {children}
      </button>
    </>
  )
}

export default Button
