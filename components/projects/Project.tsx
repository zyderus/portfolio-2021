import styles from '../../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import { svg_demo, svg_github } from '../../constants/svgs'

const Project = ({ title, description, techs, img, src }: any) => {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.img_container}>
        <Image className={styles.img} src={img} alt='ku' width={550} height={300} />
      </div>
      <div className={styles.project_btn_container}>
        <Link href={src}>
          <a>
            <Button style='outline' size='small'>
              More
            </Button>
          </a>
        </Link>
        <Link href='#github'>
          <a className={styles.svg_github}>{svg_github}</a>
        </Link>
        <Link href='#demo'>
          <a className={styles.svg_demo}>{svg_demo}</a>
        </Link>
      </div>
    </>
  )
}

export default Project
