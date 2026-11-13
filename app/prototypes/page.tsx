import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | prototypes',
}

const PrototypesPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1 style={{ opacity: '0.75' }}>{'prototypes'}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h2>{'chai'}</h2>
          <p>
            <i>{'2026 - present'}</i>
          </p>
          <p>
            {
              'Chai is an agent management system. Chai includes a terminal application and desktop application. Chai is part of a research project exploring agentic systems and specification-driven development practices.'
            }
          </p>
          <p>{'source code:'}</p>
          <ul>
            <li>
              <a href="https://github.com/chora-studio/chai" target="_blank">
                {'https://github.com/chora-studio/chai'}
              </a>
            </li>
            <li>
              <a href="https://github.com/chora-studio/chai" target="_blank">
                {'https://github.com/chora-studio/chai-examples'}
              </a>
            </li>
          </ul>
          <hr />
          <h2>{'chora (third iteration)'}</h2>
          <p>
            <i>{'2026 - present'}</i>
          </p>
          <p>
            {'Chora is an open protocol. '}
            <i>{'More information coming soon.'}</i>
          </p>
          <p>{'source code:'}</p>
          <ul>
            <li>
              <a href="https://github.com/chora-io" target="_blank">
                {'https://github.com/chora-io'}
              </a>
            </li>
          </ul>
          <hr />
          <h2>{'chora (second iteration)'}</h2>
          <p>
            <i>{'2022 - 2025'}</i>
          </p>
          <p>
            {
              'Chora was a side project that was later adopted by Chora Studio. Chora started out as a generic blockchain application for testing inter-blockchain communication with Regen Network. Chora later became a collection of prototypes designed to support and extend Regen Network and to build better support for proof-of-authority in the Cosmos ecosystem.'
            }
          </p>
          <p>
            {
              'The last description for Chora before it was archived was "software for commons governance and ecological regeneration built with distributed ledger technology." The stack included a blockchain application, blockchain modules, an API service, and three web applications: Groups, Registry, and Ledger. It also included developer tools and documentation.'
            }
          </p>
          <p>{'source code:'}</p>
          <ul>
            <li>
              <a href="https://github.com/chora-studio/web" target="_blank">
                {'https://github.com/chora-studio/web'}
              </a>
            </li>
            <li>
              <a href="https://github.com/chora-studio/docs" target="_blank">
                {'https://github.com/chora-studio/docs'}
              </a>
            </li>
            <li>
              <a href="https://github.com/chora-studio/chora" target="_blank">
                {'https://github.com/chora-studio/chora'}
              </a>
            </li>
            <li>
              <a href="https://github.com/chora-studio/mods" target="_blank">
                {'https://github.com/chora-studio/mods'}
              </a>
            </li>
            <li>
              <a href="https://github.com/chora-studio/server" target="_blank">
                {'https://github.com/chora-studio/server'}
              </a>
            </li>
            <li>
              <a href="https://github.com/chora-studio/schema" target="_blank">
                {'https://github.com/chora-studio/schema'}
              </a>
            </li>
            <li>
              <a href="https://github.com/chora-studio/testing" target="_blank">
                {'https://github.com/chora-studio/testing'}
              </a>
            </li>
          </ul>
          <hr />
          <h2>{'chora (first iteration)'}</h2>
          <p>
            <i>{'2018'}</i>
          </p>
          <p>
            {
              'Chora was the name used for many past ideas, but one of the first uses of the name "chora" in relation to the work of Chora Studio was a side project for learning smart contract development in the Ethereum ecosystem. The smart contracts were designed for decentralized organizations (or "DAOs") that users could interact with using a web application.'
            }
          </p>
          <p>{'source code:'}</p>
          <i>{'unavailable'}</i>
        </div>
      </div>
    </div>
  )
}

export default PrototypesPage
