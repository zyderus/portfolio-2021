import path from 'path'
import fs from 'fs'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export const getStaticProps = async () => {
  try {
    // Replace with fetch once connected to github api
    const res: any = await fs.promises.readFile(path.join(process.cwd(), 'constants/projects.json'))
    const projects = await JSON.parse(res)
    return { props: { features: projects }, revalidate: 3600 }
  } catch (err) {
    console.log(err)
  }
}

export default function Home({ features }: any) {
  return (
    <>
      <Hero />
      <About />
      <Features features={features} />
      <Projects projects={features} />
      <Contact />
    </>
  )
}
