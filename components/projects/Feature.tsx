import styles from '../../styles/Feature.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { svg_github, svg_demo } from '../../constants/svgs'

const Feature = ({ title, description, techs, img }: any) => {
  return (
    <>
      <div className={styles.content}>
        <div></div>
        <div className='sources'>
          <Link href='#github'>
            <a>{svg_github}</a>
          </Link>
          <Link href='#demo'>
            <a>{svg_demo}</a>
          </Link>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tech_list}>
          {techs.map((tech: string | null, idx: number | null) => {
            return (
              <li className={styles.tech_li} key={idx}>
                {tech}
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.img_container}>
        <Link href='/about'>
          <a>
            <Image className={styles.img} src={img} width={600} height={360} layout='intrinsic' alt={title} />
          </a>
        </Link>
      </div>
    </>
  )
}

export default Feature
