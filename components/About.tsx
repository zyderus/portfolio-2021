import styles from '../styles/About.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import { LocaleContext } from './Layout'
import Button from './Button'

const About = () => {
  const { t } = useContext(LocaleContext)

  return (
    <section>
      <div className={styles.container}>
        <div className='heading'>
          <h1>{t.aboutMe}</h1>
        </div>
        <br />
        <div className={styles.content}>
          <div className={styles.info}>
            <p>{t.aboutMeTextP1}</p>
            <p>{t.aboutMeTextP2}</p>
            <p>{t.aboutMeTools}</p>
            <div className={styles.list_container}>
              <ul className={styles.list}>
                <li className={styles.li}>JavaScript</li>
                <li className={styles.li}>Typescript</li>
                <li className={styles.li}>Node</li>
                <li className={styles.li}>Express</li>
                <li className={styles.li}>React</li>
                <li className={styles.li}>Next</li>
                <li className={styles.li}>SQL</li>
                <li className={styles.li}>MongoDB</li>
              </ul>
            </div>
          </div>
          {/* <div className={styles.img_container}>
            <Image className={styles.image} src={'/assets/images/ku.jpg'} alt='ku' width={1000} height={1300} />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default About
