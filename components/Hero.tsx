import styles from '../styles/Hero.module.css'
import { useContext } from 'react'
import { LocaleContext } from './Layout'
import Button from './Button'

const Hero = () => {
  const { t } = useContext(LocaleContext)

  return (
    <section className='hero'>
      <div className={styles.hero}>
        <p className={styles.intro}>{`${t.greet}, ${t.intro}`}</p>
        <h1 className={styles.title_name}>{`${t.firstName} ${t.lastName},`}</h1>
        <h1 className={styles.title_slogan}>{`${t.slogan}.`}</h1>
        <p className={styles.text}>{t.aboutSummary}</p>
        <Button style='outline' size='large'>
          {t.btnMessageMe}
        </Button>
      </div>
    </section>
  )
}

export default Hero
