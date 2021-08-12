import styles from '../styles/Projects.module.css'
import Link from 'next/link'
import Button from './elements/Button'
import Project from './elements/Project'
import { projects as list } from '../constants/projects'
import { shapeProjects } from '../utilities/sort'
import { useState, useEffect, SyntheticEvent, useContext, useRef } from 'react'
import { LocaleContext } from './Layout'

const Projects = () => {
  const { t, locale } = useContext(LocaleContext)
  const [projects, setProjects] = useState<Array<any> | []>([])
  const [viewBtn, setViewBtn] = useState<boolean>(true)
  const [edgeProject, setEdgeProject] = useState<number>(3)
  const projectList = useRef<any>([])

  projectList.current = shapeProjects(list).map(({ id, title, date, description, tech, img, src, src_github }: any) => (
    <Project
      key={id}
      title={`${title} ${new Date(date).getFullYear()}`}
      date={date}
      description={description[locale]}
      tech={tech}
      img={img}
      src={src}
      src_github={src_github}
    />
  ))

  const handleEdgeProject = (e: SyntheticEvent) => {
    e.preventDefault()
    setEdgeProject(edgeProject + 6)
  }

  useEffect(() => {
    setProjects(projectList.current.slice(0, edgeProject))
    if (!projectList.current[edgeProject]) setViewBtn(false)
  }, [edgeProject, locale])

  return (
    <section id='projects'>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>{t.projectsHeading}</h1>
        </div>

        <ul className={styles.list}>{projects}</ul>

        <div className={styles.btn_container}>
          {viewBtn ? (
            <Button style='outline' size='large' click={handleEdgeProject}>
              View More
            </Button>
          ) : (
            <Link href='/archive'>
              <a>
                <Button style='outline' size='large'>
                  View Archive
                </Button>
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
