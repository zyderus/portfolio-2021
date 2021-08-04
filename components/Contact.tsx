import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import Button from './Button'
import ContactForm from './elements/ContactForm'
import { useContext } from 'react'
import { LocaleContext } from './Layout'

const Contact = () => {
  const [clicked, setClicked] = useState(false)
  const { t } = useContext(LocaleContext)

  return (
    <section id='contact'>
      <div className={styles.contact}>
        <h1>{t.contactHeading}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic veniam doloribus libero ex voluptate in
          veritatis natus! Consequuntur voluptatum provident explicabo reprehenderit quos, consectetur?
        </p>
        <div className={styles.contact_form}>
          {clicked && (
            <>
              <ContactForm close={() => setClicked(!clicked)} />
            </>
          )}
        </div>
        {!clicked && (
          <Button style='outline' size='large' click={() => setClicked(!clicked)}>
            {t.btnClick}
          </Button>
        )}
      </div>
    </section>
  )
}

export default Contact
