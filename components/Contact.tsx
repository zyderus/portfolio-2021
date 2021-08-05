import { useContext, useState, useRef } from 'react'
import styles from '../styles/Contact.module.css'
import Button from './elements/Button'
import ContactForm from './elements/ContactForm'
import { LocaleContext } from './Layout'

const Contact = () => {
  const [clicked, setClicked] = useState(false)
  const { t } = useContext(LocaleContext)

  return (
    <section id='contact'>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>{t.contactHeading}</h1>
        </div>
        <p>
          {t.contactText} <span className={styles.funny}>😄</span>
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
