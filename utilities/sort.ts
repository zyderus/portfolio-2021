import { Project } from '../interfaces/projects'

// Return feature projects sorted by date descending
export const featureShape = (list: object[]) =>
  list
    .filter((item: any) => item.feature)
    .sort((a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
