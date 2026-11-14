import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | services',
}

const ServicesPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1 style={{ opacity: '0.75' }}>{'services'}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            {
              'Chora Studio provides software research and development as a service with expertise in decentralized protocols and agentic systems.'
            }
          </p>
          <p>
            {'As a single-member company, clients work with '}
            <a href="https://ryanchristo.com" target="_blank">
              {'Ryan Christoffersen'}
            </a>
            {
              ', owner and operator of Chora Studio. For larger software projects, Chora Studio can act as project manager with sufficient resources to hire support.'
            }
          </p>
          <p>
            {
              'If your organization is interested in working with Chora Studio, please reach out with information about the organization and project:'
            }
          </p>
          <p style={{ textAlign: 'center' }}>{'contact [at] chora.studio'}</p>
          <p>
            <i>
              {
                'The above email address uses Proton Mail under the hood. If you send an email using Proton Mail, our communication will be end-to-end encrypted.'
              }
            </i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
