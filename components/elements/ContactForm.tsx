import styles from '../../styles/ContactForm.module.css'
import { SyntheticEvent, useState } from 'react'
import Button from '../Button'

const ContactForm = () => {
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
      <div className={styles.inputGroup}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          className={styles.inputField}
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          className={styles.inputField}
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='message'>Message</label>
        <input
          type='text'
          name='message'
          className={styles.inputField}
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
      </div>

      <br />

      <Button style='outline' size='large' click={handleSubmit}>
        Send
      </Button>
    </div>
  )
}

export default ContactForm
