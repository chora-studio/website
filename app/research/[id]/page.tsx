import { Metadata } from 'next'

import { getDoc, getDocs } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | research',
}

export const generateStaticParams = () => {
  return getDocs()
}

const DocumentPage = async ({ params }: any) => {
  const doc = await getDoc(params.id)

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h3>{doc.date}</h3>
          <h1>{doc.title}</h1>
          <h2>{`by ${doc.author}`}</h2>
        </div>
      </div>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: doc.content }} />
      </div>
    </div>
  )
}

export default DocumentPage
