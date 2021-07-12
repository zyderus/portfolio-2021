import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Button from '../Button'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className='heading'>
        <h1>Other Things I&apos;ve Built</h1>
      </div>
      <br />
      <ul>
        <li className={styles.lis}>
          <div className={styles.content}>
            <h1>Header</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolore expedita laudantium est provident
              tempore, odio cum fugiat ratione voluptatum officia quod sed?
            </p>
          </div>
          <div className={styles.image_container}>
            <Image className={styles.img} src={'/assets/images/tron.png'} alt='kukuku' width={550} height={300} />
          </div>
        </li>
      </ul>
      <div className='btn-container'>
        <Button style='outline' size='large'>
          View List
        </Button>
      </div>
    </div>
  )
}

export default Projects
