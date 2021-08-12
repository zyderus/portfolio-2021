import styles from '../../styles/Button.module.css'

const STYLES = ['solid', 'outline']
const SIZES = ['small', 'medium', 'large']

const Button: React.FC<any> = ({ style, size, click, children, disabled }) => {
  const checkStyle = STYLES.includes(style) ? styles[style] : STYLES[0]
  const checkSize = SIZES.includes(size) ? styles[size] : SIZES[0]
  const classes = [styles.btn, checkStyle, checkSize].join(' ')

  return (
    <>
      <button className={classes} onClick={click} disabled={disabled}>
        {children}
      </button>
    </>
  )
}

export default Button
