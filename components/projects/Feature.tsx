import styles from '../../styles/Feature.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { svg_github, svg_demo } from '../../constants/svgs'
import useObserver from '../../utilities/useObserver'

const Feature = ({ title, description, tech, img, src, src_github }: any) => {
  const [element, isVisible] = useObserver({})

  return (
    <div className={isVisible ? styles.start + ' ' + styles.show : styles.start} ref={element}>
      <div className={styles.content}>
        <div></div>
        <div className='sources'>
          <Link href={src_github}>
            <a>{svg_github}</a>
          </Link>
          <Link href={src}>
            <a>{svg_demo}</a>
          </Link>
        </div>
        <Link href={src}>
          <a>
            <h2 className={isVisible ? styles.title + ' ' + styles.show_01 : styles.title}>{title}</h2>
          </a>
        </Link>
        <p className={isVisible ? styles.description + ' ' + styles.show_05 : styles.description}>{description}</p>
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
      <div className={styles.img_container}>
        <Link href={src}>
          <a>
            <Image className={styles.img} src={img} width={600} height={360} layout='intrinsic' alt={title} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Feature
