import styles from '../styles/About.module.css'
import Image from 'next/image'
import Button from './Button'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <br />
      <div className={styles.content}>
        <div className='text'>
          <p>
            Hello! My name is Rustam and I enjoy creating things that live on the internet. My intereest in web
            development started back in 2012 when I decided to try editing custom Tumbler themes -- turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <br />
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge
            corporation, and a student-led design studio. My main focus these days is building accessible, incluse
            products and digital experiences at Upastatement for a variety of clients.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <br />
          <ul style={{ paddingLeft: '2rem', columns: 2 }}>
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

        {/* <Image src='/assets/images/ku.jpg' alt='Picture of the author' width={500} height={500} /> */}
        <img
          src='https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          width='300'
        />
      </div>
      <br />
      <Button style='outline' size='large'>
        Message Me
      </Button>
    </div>
  )
}

export default About
