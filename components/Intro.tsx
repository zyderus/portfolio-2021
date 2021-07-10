import styles from '../styles/Intro.module.css'
import Button from './Button'

const Intro = () => {
  return (
    <div className={styles.container}>
      <p className='accent'>Hi, my name is</p>
      <br />
      <h1 className={styles.title__name}>Rustam Ziyadov.</h1>
      <h1 className={styles.title__slogan}>I enjoy building stuff for the web.</h1>
      <p>
        I’m a Moscow-based software developer whose focus is on building exceptional web and mobile experiences.
        Currently, I’m a developer at Datagrame making functional and intuitive products.
      </p>
      <Button style='outline' size='large'>
        Message Me
      </Button>
    </div>
  )
}

export default Intro
