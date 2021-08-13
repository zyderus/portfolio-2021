import styles from '../../styles/Feature.module.css'
import Image from 'next/image'
import { github, external_link } from '../../constants/icons_outline'
import useObserver from '../../utilities/useObserver'

const Feature = ({ title, date, description, tech, img, src, src_github }: any) => {
  const [element, isVisible] = useObserver({ rootMargin: '0px 0px -15% 0px' })
  const isLink = () => {
    if (!src) void 0
  }

  return (
    <div ref={element} className={isVisible ? styles.container + ' ' + styles.show : styles.container}>
      <div className={styles.content}>
        <div></div>
        <div className={styles.sources}>
          {src_github && (
            <a href={src_github} target='_blank' rel='noreferrer'>
              {github}
            </a>
          )}
          {src && (
            <a href={src} target='_blank' rel='noreferrer'>
              {external_link}
            </a>
          )}
        </div>
        <a href={src ? src : void 0} target='_blank' rel='noreferrer'>
          <h2 className={isVisible ? styles.title + ' ' + styles.show_01 : styles.title}>{title}</h2>
        </a>
        <div className={styles.date}>{date}</div>
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
        <a href={src ? src : void 0} target='_blank' rel='noreferrer'>
          <Image className={styles.img} src={img} width={600} height={360} layout='intrinsic' alt={title} />
        </a>
      </div>
    </div>
  )
}

export default Feature
