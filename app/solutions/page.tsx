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
              'Chora Studio provides software research and development as a service with expertise in blockchain infrastructure and regenerative finance.'
            }
          </p>
          <p>
            {'As a single-member company, clients work with '}
            <a href="https://ryanchristo.com/about" target="_blank">
              {'Ryan Christoffersen'}
            </a>
            {
              ', owner and operator of Chora Studio. For larger software projects, Chora Studio can act as project manager with sufficient resources to hire support.'
            }
          </p>
          <p>
            {
              'If your company is interested in working with Chora Studio, please reach out with more information about your company and your project.'
            }
          </p>
          <p style={{ margin: '1em', textAlign: 'center' }}>
            {'contact [at] chora.studio'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SolutionsPage
