import styles from '../styles/About.module.css'
import Image from 'next/image'
import Button from './Button'

const About = () => {
  return (
    <div className={styles.about}>
      <div className='heading'>
        <h1>.about().me()</h1>
      </div>
      <br />
      <div className={styles.content}>
        <div className={styles.info}>
          <p>
            Hello! My name is Rustam and I enjoy making stuff that live on the web and run on mobiles. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Eaque debitis inventore hic doloremque libero beatae!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, minima sed perferendis ab mollitia,
            doloribus eveniet officia, asperiores accusantium sunt tenetur placeat voluptate corporis? Minima ad
            temporibus laborum id facilis ut dignissimos deserunt ipsa voluptate recusandae placeat numquam dicta quasi
            nesciunt blanditiis doloremque assumenda.
          </p>
          <br />
          <p>Some of the technologies I use most often:</p>
          <br />
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
          <Image className={styles.image} src={'/assets/images/ku.jpg'} alt='ku' width={1000} height={1300} />
        </div>
      </div>
    </div>
  )
}

export default About
