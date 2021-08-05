import styles from '../../styles/ContactForm.module.css'
import { SyntheticEvent, useState, useRef } from 'react'
import Button from './Button'
import { useContext } from 'react'
import { LocaleContext } from '../Layout'
import { x } from '../../constants/icons_outline'

const ContactForm = ({ close }: any) => {
  const { t } = useContext(LocaleContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const data = { name, email, message }

    fetch('/api/contact', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmit(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.formGroup + ' ' + styles.active}>
        <div className={styles.xclose} onClick={close}>
          {x}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='name'>{t.formName}</label>
          <input
            type='text'
            name='name'
            className={styles.inputField}
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>{t.formEmail}</label>
          <input
            type='email'
            name='email'
            className={styles.inputField}
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='message'>{t.formMessage}</label>
          <textarea
            name='message'
            className={styles.inputField}
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </div>

      <Button style='outline' size='large' click={handleSubmit}>
        {t.btnSend}
      </Button>
    </div>
  )
}

export default ContactForm
