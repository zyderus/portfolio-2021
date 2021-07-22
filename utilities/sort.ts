import { Project } from '../interfaces/projects'

const reverse = (list: Project[]) =>
  list.sort((a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

// feature projects
export const shapeFeatures = (list: Project[]) => reverse(list).filter((item: Project) => item.feature)

// projects w/o featured
export const shapeProjects = (list: Project[]) => reverse(list).filter((item: Project) => !item.feature)
