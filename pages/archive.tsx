import path from 'path'
import fs from 'fs'
import ProjectsArchive from '../components/ProjectsArchive'

export const getStaticProps = async () => {
  try {
    // Replace with fetch once connected to github api
    const res: any = await fs.promises.readFile(path.join(process.cwd(), 'constants/projects.json'))
    const projects = await JSON.parse(res)
    return { props: { projects }, revalidate: 3600 }
  } catch (err) {
    console.log(err)
  }
}

export default function Archive({ projects }: any) {
  return <ProjectsArchive list={projects} />
}
