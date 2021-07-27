import styles from '../styles/Hero.module.css'
import { useContext } from 'react'
import Button from './Button'
import { LocaleContext } from './Layout'

const Hero = () => {
  const { t } = useContext(LocaleContext)

  return (
    <section>
      <div className={styles.hero}>
        <p className={styles.intro}>{`${t.greet}, ${t.intro}`}</p>
        <br />
        <h1 className={styles.title_name}>{`${t.firstName} ${t.lastName},`}</h1>
        <h1 className={styles.title_slogan}>{`${t.slogan}.`}</h1>
        <br />
        <p>{t.aboutResume}</p>
        <br />
        <Button style='outline' size='large'>
          {t.btnMessageMe}
        </Button>
      </div>
    </section>
  )
}

export default Hero
