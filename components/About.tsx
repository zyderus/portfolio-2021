import styles from '../styles/About.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import { LocaleContext } from './Layout';
import Button from './elements/Button';

const About = () => {
  const { t } = useContext(LocaleContext);

  return (
    <section id='about'>
      <div className={styles.container}>
        <div className='heading'>
          <h1>{t.aboutMe}</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <p>{t.aboutMeTextP1}</p>
            <p>{t.aboutMeTextP2}</p>
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
          <div className={styles.img_container}>
            <Image
              className={styles.image}
              src={'/assets/images/photo-placeholder.png'}
              alt='portrait'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
