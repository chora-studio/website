import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = path.join(process.cwd(), 'artifacts')

export const getArtifacts = (dir: string) => {
  const fileNames = fs.readdirSync(root + '/' + dir)

  const filtered = fileNames.filter((fileName) => fileName.includes(`.md`))

  return filtered.map((fileName) => {
    // set id
    const id = fileName.replace(/\.md$/, '')

    // set full path
    const fullPath = path.join(root, dir, fileName)

    // read file contents
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // parse file contents
    const { data } = matter(fileContents)

    // return id and data
    return {
      id,
      ...data,
    }
  }) as any[]
}
