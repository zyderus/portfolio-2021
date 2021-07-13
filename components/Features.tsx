import styles from '../styles/Features.module.css'
import Feature from './projects/Feature'
import { features } from '../constants/features'

const projects = features.map(({ title, description, techs, img }: any, idx: number) => {
  return (
    <li className={styles.list_item} key={idx}>
      <Feature title={title} description={description} techs={techs} img={img} />
    </li>
  )
})

const Work = () => {
  return (
    <div className={styles.work}>
      <div className='heading'>
        <h1>Things I&apos;ve Made</h1>
      </div>
      <ul className={styles.list}>{projects}</ul>
    </div>
  )
}

export default Work
