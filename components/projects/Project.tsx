import styles from '../../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import { svg_demo, svg_github } from '../../constants/svgs'

const Project = ({ title, description, tech, img, src, src_github }: any) => {
  return (
    <>
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
          <Link href={src}>
            <a>
              <Button style='outline' size='small'>
                More
              </Button>
            </a>
          </Link>
          <Link href={src_github}>
            <a className={styles.svg_github}>{svg_github}</a>
          </Link>
          <Link href={src}>
            <a className={styles.svg_demo}>{svg_demo}</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Project
