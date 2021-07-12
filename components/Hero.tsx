import styles from '../styles/Hero.module.css'
import Button from './Button'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <p className='accent'>Hi, my name is</p>
      <br />
      <h1 className={styles.title__name}>Rustam Ziyadov.</h1>
      <h1 className={styles.title__slogan}>I build things with code.</h1>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic veniam doloribus libero ex voluptate in
        veritatis natus! Consequuntur voluptatum provident explicabo reprehenderit quos, consectetur?
      </p>
      <br />
      <Button style='outline' size='large'>
        Message Me
      </Button>
    </div>
  )
}

export default Hero
