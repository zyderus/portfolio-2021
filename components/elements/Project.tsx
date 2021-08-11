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
          <a href={src ? src : void 0}>{title}</a>
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
          <a href={src ? src : void 0}>
            <Image className={styles.img} src={img} alt='ku' width={550} height={300} layout='intrinsic' />
          </a>
        </div>
        <div className={styles.project_btn_container}>
          <div className={styles.sources}>
            {src_github && <a href={src_github}>{svg_github}</a>}
            {src && (
              <a href={src} target='_blank' rel='noreferrer'>
                {external_link}
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Project
