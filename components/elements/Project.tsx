import styles from '../../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { svg_github, external_link } from '../../constants/icons_outline'
import useObserver from '../../utilities/useObserver'

const randomDelay = (min: number, max: number) => ~~(Math.random() * (max - min + 1) + min)

const Project = ({ id, title, description, tech, img, src, src_github }: any) => {
  const [element, isVisible] = useObserver({ rootMargin: '0px 0px 0px -50px' })

  return (
    <li
      className={styles.container + ' ' + (isVisible ? styles.start + ' ' + styles.show : styles.start)}
      ref={element}
      style={{ transitionDelay: `0.${randomDelay(100, 200)}s` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Link href={src}>
            <a>{title}</a>
          </Link>
        </h1>
        <p>{description}</p>
        <ul className={styles.tech_list}>
          {tech.map((tech: string | null, idx: number | null) => {
            return (
              <li className={styles.tech_li} key={idx}>
                {tech}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <div className={styles.img_container}>
          <Link href={src}>
            <a>
              <Image className={styles.img} src={img} alt='ku' width={550} height={300} />
            </a>
          </Link>
        </div>
        <div className={styles.project_btn_container}>
          <div className={styles.sources}>
            <Link href={src_github}>
              <a>{svg_github}</a>
            </Link>
            <Link href={src}>
              <a target='_blank'>{external_link}</a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Project
