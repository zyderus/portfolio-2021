import styles from '../styles/Hero.module.css'
import Button from './Button'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <p className='accent'>Hi, my name is</p>
      <br />
      <h1 className={styles.title__name}>Rustam Ziyadov.</h1>
      <h1 className={styles.title__slogan}>I enjoy building stuff for the web.</h1>
      <br />
      <p>
        I’m a Moscow-based software developer whose focus is on building exceptional web and mobile experiences.
        Currently, I’m a developer at Datagrame making functional and intuitive products.
      </p>
      <br />
      <Button style='outline' size='large'>
        Message Me
      </Button>
    </div>
  )
}

export default Hero
