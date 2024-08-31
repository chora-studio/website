import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | solutions',
}

const SolutionsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1 style={{ opacity: '0.75' }}>{'solutions'}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            {
              'Chora Studio provides software research and development as a service with a focus on distributed ledger technology and regenerative finance.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default SolutionsPage
