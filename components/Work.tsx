import styles from '../styles/Work.module.css'
import Image from 'next/image'
import Button from './Button'

const Work = () => {
  return (
    <div className={styles.about}>
      <div className='heading'>
        <h1>Things I&apos;ve Made</h1>
      </div>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quos modi vitae nemo commodi, dolor, est aperiam
        voluptates inventore odio sapiente ipsa, id a provident eaque harum amet consequuntur expedita. Sit nostrum sint
        tempora?
      </p>
      <br />
      <ul>
        <li className={styles.project_li}>
          <div className={styles.content}>
            <div>
              <h3 className={styles.title}>
                <a href='#'>Project Title</a>
              </h3>

              <div className={styles.description}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim numquam explicabo labore sit
                  reiciendis maxime. Nisi consequatur animi eveniet aperiam ex delectus sed reiciendis incidunt
                  aspernatur voluptatum quia recusandae eligendi suscipit enim corrupti provident ullam, itaque qui
                  accusamus quos molestias deserunt!
                </p>
              </div>

              <ul className={styles.techlist}>
                <li>Typescript React Node GraphQL</li>
              </ul>

              <div className={styles.links}>
                <a href='#' aria-label='GitHub Link'>
                  <span>github icon</span>
                </a>
                <a href='#' aria-label='External Link' className={styles.demo}>
                  <span>demo icon</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.image_container}>
            <Image className={styles.img} src={'/assets/images/tron.png'} alt='kukuku' width={550} height={300} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Work
