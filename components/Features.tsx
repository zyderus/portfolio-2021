import styles from '../styles/Features.module.css'
import Feature from './projects/Feature'
import { features as featuresData } from '../constants/features'

const projects = featuresData.map(({ id, title, date, description, tech, img, src, src_github }: any) => {
  return (
    <li className={styles.list_item} key={id}>
      <Feature
        title={title}
        date={date}
        description={description}
        tech={tech}
        img={img}
        src={src}
        src_github={src_github}
      />
    </li>
  )
})

const Features = () => {
  return (
    <div className={styles.features}>
      <div className='heading'>
        <h1>Things I&apos;ve Made</h1>
      </div>
      <ul className={styles.list}>{projects}</ul>
    </div>
  )
}

export default Features
