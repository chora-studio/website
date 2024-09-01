import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | products',
}

const ProductsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1 style={{ opacity: '0.75' }}>{'products'}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            {'Chora Studio is stewarding '}
            <a href="https://chora.io" target="_blank">
              {'Chora'}
            </a>
            {
              ' - software for commons governance and ecological regeneration built with distributed ledger technology.'
            }
          </p>
          <p>
            {
              'Chora includes a blockchain application, blockchain modules, an API service, and three web applications: '
            }
            <a href="https://chora.io/groups" target="_blank">{'Groups'}</a>
            {', '}
            <a href="https://chora.io/registry" target="_blank">{'Registry'}</a>
            {', and '}
            <a href="https://chora.io/ledger" target="_blank">{'Ledger'}</a>
            {'.'}
          </p>
          <p>
            {
              'Chora also includes demo applications, developer tools, and other software experiments. For more information, see '
            }
            <a href="https://docs.chora.io" target="_blank">
              {'Chora Documentation'}
            </a>
            {'.'}
          </p>
          <p style={{ margin: '1em', textAlign: 'center' }}>
            <a href="https://github.com/chora-io" target="_blank">
              {'chora repositories'}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
