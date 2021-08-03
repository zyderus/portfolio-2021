import styles from '../styles/Feature.module.css'
import Feature from '../components/elements/Feature'
import { projects as features } from '../constants/projects'
// import { shapeFeatures } from '../utilities/sort'

// const projects = shapeFeatures(features).map(({ id, title, date, description, tech, img, src, src_github }: any) => {
//   return (
//     <li className={styles.list_item} key={id}>
//       <Feature
//         title={`${title} ${new Date(date).getFullYear()}`}
//         date={date}
//         description={description}
//         tech={tech}
//         img={img}
//         src={src}
//         src_github={src_github}
//       />
//     </li>
//   )
// })

export default function Contact() {
  const { id, title, date, description, tech, img, src, src_github } = features[0]

  return (
    <ul>
      <li className={styles.list_item} key={id}>
        <Feature
          title={`${title} ${new Date(date).getFullYear()}`}
          date={date}
          description={description}
          tech={tech}
          img={img}
          src={src}
          src_github={src_github}
        />
      </li>
    </ul>
  )
}
