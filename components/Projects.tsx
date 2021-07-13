import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import Project from './projects/Project'
import { projects as projectsData } from '../constants/projects'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const projects = projectsData.map(({ title, description, techs, img, src }: any, idx: number) => {
  return (
    <li className={styles.list_item} key={idx}>
      <Project title={title} description={description} techs={techs} img={img} src={src} />
    </li>
  )
})

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className='heading'>
        <h1>A Few Other Things I&apos;ve Built</h1>
      </div>

      <ul className={styles.list}>{projects}</ul>

      <div className='btn-container'>
        <Button style='outline' size='large'>
          View List
        </Button>
      </div>
    </div>
  )
}

export default Projects
