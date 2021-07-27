import styles from '../styles/Hero.module.css'
import { useContext } from 'react'
import Button from './Button'
import { LocaleContext } from './Layout'

const Hero = () => {
  const { t } = useContext(LocaleContext)

  return (
    <section>
      <div className={styles.hero}>
        <h1>{t.title}</h1>
        <p>{t.p}</p>
        <br />
        <p className='accent'>Hi, my name is</p>
        <br />
        <h1 className={styles.title_name}>Rustam Ziyadov,</h1>
        <h1 className={styles.title_slogan}>and I build things with code.</h1>
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
    </section>
  )
}

export default Hero
