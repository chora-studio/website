import { Metadata } from 'next'

import { getArtifact, getArtifacts } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | research',
}

export const generateStaticParams = () => {
  return getArtifacts('tutorials')
}

const ArtifactPage = async ({ params }: any) => {
  const artifact = await getArtifact('tutorials', params.id)
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <p>{`author: ${artifact.author}`}</p>
          <p>{`title: ${artifact.title}`}</p>
          <p>{`description: ${artifact.description}`}</p>
          <p>{`created: ${artifact.created.toDateString()}`}</p>
          <p>{`updated: ${artifact.updated.toDateString()}`}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: artifact.content }} />
      </div>
    </div>
  )
}

export default ArtifactPage
