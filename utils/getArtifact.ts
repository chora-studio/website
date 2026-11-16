import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const root = path.join(process.cwd(), 'research')

export async function getArtifact(dir: string, id: string) {
  const fullPath = path.join(root, dir, `${id}.md`)

  // read file contents
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // parse file contents
  const { content, data } = matter(fileContents)

  // convert markdown to html
  const processedContent = await remark().use(html).process(content)

  // return id, content, and data
  return {
    id,
    content: processedContent.toString(),
    ...data,
  } as any
}
