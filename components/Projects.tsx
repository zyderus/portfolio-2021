import styles from '../styles/Projects.module.css'
import Link from 'next/link'
import Button from './Button'
import Project from './elements/Project'
import { projects as list } from '../constants/projects'
import { shapeProjects } from '../utilities/sort'
import { useState, useEffect, SyntheticEvent } from 'react'

const projectList = shapeProjects(list).map(({ id, title, date, description, tech, img, src, src_github }: any) => (
  <Project
    key={id}
    title={`${title} ${new Date(date).getFullYear()}`}
    date={date}
    description={description}
    tech={tech}
    img={img}
    src={src}
    src_github={src_github}
  />
))

const Projects = () => {
  const [projects, setProjects] = useState<Array<any> | []>([])
  const [viewBtn, setViewBtn] = useState<boolean>(true)
  const [page, setPage] = useState<number>(0)

  const handlePage = (e: SyntheticEvent) => {
    e.preventDefault()
    setPage(page => page + 1)
  }

  useEffect(() => {
    if (page < 1) {
      setProjects(projectList.slice(0, 3))
    } else {
      const start = page * 6 - 3
      const end = page * 6 + 3
      setProjects((projects: any) => [...projects, ...projectList.slice(start, end)])
      if (!projectList[end]) setViewBtn(false)
    }
  }, [page])

  return (
    <div className={styles.projects}>
      <div className='heading'>
        <h1>.other_things_Ive_built()</h1>
      </div>

      <ul className={styles.list}>{projects}</ul>

      <div className='btn-container'>
        <Link href='#'>
          <a>
            <Button style='outline' size='large' click={viewBtn ? handlePage : () => console.log('ku')}>
              {viewBtn ? 'View More' : 'View Archive'}
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Projects
