import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import Button from './Button'
import ContactForm from './elements/ContactForm'

const Contact = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <section id='contact'>
      <div className={styles.contact}>
        <h1>.contact().me()</h1>
        <br />
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic veniam doloribus libero ex voluptate in
          veritatis natus! Consequuntur voluptatum provident explicabo reprehenderit quos, consectetur?
        </p>
        <br />
        <br />
        <Button style='outline' size='large' click={() => setClicked(!clicked)}>
          click
        </Button>

        <br />
        <br />

        {clicked ? <ContactForm /> : null}
      </div>
    </section>
  )
}

export default Contact
