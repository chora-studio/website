import { Metadata } from 'next'
import Link from 'next/link'

import { getArtifacts } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | research',
}

async function getResearchArtifacts() {
  return [
    { group: 'about', items: getArtifacts('about') },
    { group: 'concepts', items: getArtifacts('concepts') },
  ]
}

const ResearchPage = async () => {
  const artifacts = await getResearchArtifacts()
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1>{'research'}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            {
              'Chora Studio is researching decentralized protocols and agentic systems with a special interest in privacy-preserving technologies.'
            }
          </p>
          {!artifacts.length ? (
            <p>
              <i>{'failed to load artifacts'}</i>
            </p>
          ) : (
            <div>
              {artifacts.map(({ group, items }) => (
                <div key={group} style={{ margin: '1em 0' }}>
                  <h2>{group}</h2>
                  <ul>
                    {items.map(
                      ({ id, title, description, created, updated }) => (
                        <li key={id}>
                          <Link href={`/research/` + group + '/' + id}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>
                              <i>{`created: ${created.toDateString()}`}</i>
                              {' | '}
                              <i>{`updated: ${updated.toDateString()}`}</i>
                            </p>
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResearchPage
