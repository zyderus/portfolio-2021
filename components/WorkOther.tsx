import styles from '../styles/WorkOther.module.css'
import Image from 'next/image'
import Button from './Button'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const projectList = [
  {
    title: 'Tron Movies',
    techs: ['Node', 'Express', 'MongoDB', 'Bootstrap'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolore expedita laudantium est provident tempore, odio cum fugiat ratione voluptatum officia quod sed?',
    img: 'https://images.unsplash.com/photo-1625940344779-f4b5d59cfdb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80',
  },
  {
    title: 'Diamat 3D Slides',
    techs: ['React', 'Express', 'PostgresSQL'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolore expedita laudantium est provident tempore, odio cum fugiat ratione voluptatodio cum fugiat raum officia quod sed?',
    img: 'https://images.unsplash.com/photo-1600354896999-b4646f010829?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80',
  },
  {
    title: 'Coffee App',
    techs: ['Typescript', 'React', 'Firebase', 'StyledComponents'],
    description:
      'Lorem ipsum, dtur adipisicing elit. Fuga dolore expedita laudantium est provident tempore, odio cum fugiat ratione voluptatum officia quod sed?',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    title: 'Psychodelic Blog',
    techs: ['Typescript'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolore expedita laudantium est provident tempore, odio cum fuit amet consectetur adipisicing elit. Fuga dolore expedita laudantium est provident tempore, odio cum fugiat ratione voluptatum officia quod sed?',
    img: 'https://images.unsplash.com/photo-1577475992478-eeeefa34551c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
]

const Project = ({ title, description, techs, img }: any) => {
  return (
    <li className={styles.list_item}>
      <div className={styles.content}>
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
        <Image className={styles.img} src={img} width={400} height={220} alt={title} />
      </div>
    </li>
  )
}

const projects = projectList.map(({ title, description, techs, img }, idx: number) => {
  return <Project key={idx} title={title} description={description} techs={techs} img={img} />
})

const WorkOther = () => {
  return (
    <div className={styles.about}>
      <div className='heading'>
        <h1>Other Things I&apos;ve Built</h1>
      </div>
      <br />
      <ul>
        <li className={styles.lis}>
          <div className={styles.content}>
            <h1>Header</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolore expedita laudantium est provident
              tempore, odio cum fugiat ratione voluptatum officia quod sed?
            </p>
          </div>
          <div className={styles.image_container}>
            <Image className={styles.img} src={'/assets/images/tron.png'} alt='kukuku' width={550} height={300} />
          </div>
        </li>
      </ul>
      <div className='btn-container'>
        <Button style='outline' size='large'>
          View List
        </Button>
      </div>

      <ul className={styles.list}>{projects}</ul>
    </div>
  )
}

export default WorkOther
