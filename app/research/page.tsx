import { Metadata } from 'next'
import Link from 'next/link'

import { getDocs } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | research',
}

async function getResearch() {
  const allDocs = getDocs().filter((p) => p.tags.includes('research'))

  // sort docs by date
  return allDocs.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

const ResearchPage = async () => {
  const docs = await getResearch()

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1 style={{ opacity: '0.75' }}>{'research'}</h1>
        </div>
      </div>
      <div className={styles.content}>
          <div>
          <p>
            {
              'Chora Studio is researching distributed systems, governance frameworks, and decentralized ecological monitoring, reporting, and verification.'
            }
          </p>
              </div>
      </div>
      <div className={styles.contentFull}>
        {!docs.length ? (
          <p>{'coming soon...'}</p>
        ) : (
          <ul>
            {docs.map(({ id, date, title, author }) => (
              <li key={id}>
                <Link href={`/research/${id}`}>
                  <h4>{date}</h4>
                  <h2>{title}</h2>
                  <h3>{`by ${author}`}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ResearchPage
