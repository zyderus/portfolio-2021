import styles from '../styles/Contact.module.css'
import Button from './Button'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>.contact().me()</h1>
      <br />
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic veniam doloribus libero ex voluptate in
        veritatis natus! Consequuntur voluptatum provident explicabo reprehenderit quos, consectetur?
      </p>
      <br />
      <br />
      <Button style='outline' size='large'>
        click
      </Button>
    </div>
  )
}

export default Contact
