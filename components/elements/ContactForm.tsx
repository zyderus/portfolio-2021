import styles from '../../styles/ContactForm.module.css'
import { useState, useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LocaleContext } from '../Layout'
import { Inputs } from '../../interfaces/contact'
import Status from '../elements/Status'
import Button from './Button'
import { x } from '../../constants/icons_outline'

const ContactForm = ({ close }: any) => {
  const { t } = useContext(LocaleContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [senderName, setSenderName] = useState('')

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setSenderName(data.name)
    setSubmitDisabled(true)
    setFormStatus('loading')
    const options = {
      method: 'post',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    try {
      const res = await fetch('/api/contact', options)      
      if (res.status == 200) {
        reset()
        setFormStatus('success')
        setTimeout(() => close(), 9000)
      } else {
        setFormStatus('error')
        setTimeout(() => {
          setFormStatus('')
          setSubmitDisabled(false)
        }, 3000)
      }
    } catch (err) {
      setFormStatus('error')
      setTimeout(() => {
        setFormStatus('')
        setSubmitDisabled(false)
      }, 5000)
      console.log('ERROR FROM CATCH:', err)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formGroup + ' ' + styles.active}>
        <div className={styles.xclose} onClick={close}>
          {x}
        </div>
        {formStatus && <Status status={formStatus} name={senderName} />}
        <form id='contact-form' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name' className='sr-only'>
              {t.formName}
            </label>
            <input
              type='text'
              {...register('name', {
                required: {
                  value: true,
                  message: t.formNameRequired,
                },
                minLength: {
                  value: 2,
                  message: t.formNameValid,
                },
              })}
              placeholder={t.formName}
            />
            <span className='error'>{errors?.name?.message}</span>
          </div>
          <div>
            <label htmlFor='email' className='sr-only'>
              {t.formEmail}
            </label>
            <input
              type='text'
              {...register('email', {
                required: {
                  value: true,
                  message: t.formEmailRequired,
                },
                minLength: {
                  value: 7,
                  message: t.formEmailShort,
                },
                maxLength: {
                  value: 120,
                  message: t.formEmailLong,
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t.formEmailValid,
                },
              })}
              placeholder={t.formYourEmail}
            />
            <span className='error'>{errors?.email?.message}</span>
          </div>

          <div>
            <label htmlFor='message' className='sr-only'>
              {t.formMessage}
            </label>
            <textarea
              {...register('message', {
                required: {
                  value: true,
                  message: t.formMessageRequired,
                },
                maxLength: {
                  value: 1000,
                  message: t.formMessageMaxLength,
                },
                minLength: {
                  value: 10,
                  message: t.formMessageMinLength,
                },
              })}
              placeholder={t.formMessage}
              rows={4}
            ></textarea>
            <span className='error'>{errors?.message?.message}</span>
          </div>
        </form>
      </div>

      <Button style='outline' size='large' click={handleSubmit(onSubmit)} disabled={submitDisabled}>
        {t.btnSend}
      </Button>
    </div>
  )
}

export default ContactForm
