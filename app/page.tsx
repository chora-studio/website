import { ArrowRight } from 'chora/components/icons'
import { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | research and development',
}

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1>
            {'chora'} <span style={{ opacity: '0.75' }}>{'studio'}</span>
          </h1>
          <p>
            <i>{'decentralized protocols and agentic systems'}</i>
          </p>
          <p>{'research and development'}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h2>{'research'}</h2>
          <p>
            {
              'Chora Studio is researching decentralized protocols and agentic systems with a special interest in privacy-preserving technologies.'
            }
          </p>
          <Link href="/research">
            {'learn more'}
            <ArrowRight />
          </Link>
          <h2>{'prototypes'}</h2>
          <p>
            {
              'Chora Studio is developing experimental software with a focus on tools and infrastructure for decentralized protocols and agentic systems.'
            }
          </p>
          <Link href="/prototypes">
            {'learn more'}
            <ArrowRight />
          </Link>
          <h2>{'services'}</h2>
          <p>
            {
              'Chora Studio provides software research and development as a service with expertise in decentralized protocols and agentic systems.'
            }
          </p>
          <Link href="/services">
            {'learn more'}
            <ArrowRight />
          </Link>
          {/* <h2>{'validator'}</h2>
          <p>
            {'Chora Studio operates Chora Validator on '}
            <a
              href="https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e"
              target="_blank"
            >
              {'Regen'}
            </a>
            {
              ' and multiple test networks including Regen Redwood and Chora Testnet.'
            }
          </p>
          <Link href="/validator">
            {'learn more'}
            <ArrowRight />
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage
