import path from 'path'
import fs from 'fs'
import Archive from '../components/Archive'

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

export default function ArchivePage({ projects }: any) {
  return <Archive list={projects} />
}
