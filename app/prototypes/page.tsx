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
          <h3
            style={{
              fontSize: '2em',
              fontStyle: 'italic',
              margin: '1em 0 2em 0',
              textAlign: 'center',
            }}
          >
            {'active'}
          </h3>
          <hr />
          <h2>{'chai'}</h2>
          <p>
            <i>{'2026 - present'}</i>
          </p>
          <p>
            {
              'Chai is a multi-agent management system. It includes a command-line tool and a desktop application. Chai is also a research project exploring agentic systems and specification-driven development practices.'
            }
          </p>
          <p>{'languages/tools:'}</p>
          <i>{'Rust, LLMs'}</i>
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
          <h2>{'chora (open research protocol)'}</h2>
          <p>
            <i>{'2026 - present'}</i>
          </p>
          <p>
            {
              'Chora is an open research protocol in its earliest design phase. Chora is also a research project exploring decentralized protocols and knowledge graphs and how they intersect. Check back soon for more information.'
            }
          </p>
          <p>{'languages/tools:'}</p>
          <i>{'Rust, Typescript, React, Nostr, IPFS'}</i>
          <p>{'source code:'}</p>
          <ul>
            <li>
              <a href="https://github.com/chora-io" target="_blank">
                {'https://github.com/chora-io'}
              </a>
            </li>
          </ul>
          <hr />
          <h3
            style={{
              fontSize: '2em',
              fontStyle: 'italic',
              margin: '2em 0',
              textAlign: 'center',
            }}
          >
            {'archive'}
          </h3>
          <hr />
          <h2>{'chora (distributed ledger technology)'}</h2>
          <p>
            <i>{'2022 - 2025'}</i>
          </p>
          <p>
            {
              'Chora was a side project that was later adopted by Chora Studio. Chora started out as a generic blockchain application for testing inter-blockchain communication with Regen Ledger. Chora later became a software stack designed to support and extend Regen Ledger and to provide improved support for proof-of-authority in the Cosmos ecosystem.'
            }
          </p>
          <p>
            {
              'The last description for Chora before it was archived was "software for commons governance and ecological regeneration built with distributed ledger technology." The stack included a blockchain application, blockchain modules, an API service, and three web applications: Groups, Registry, and Ledger. It also included developer tools and documentation.'
            }
          </p>
          <p>{'languages/tools:'}</p>
          <i>{'Go, Cosmos SDK, Typescript, React, IPFS'}</i>
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
          <h2>{'chora (decentralized organizations)'}</h2>
          <p>
            <i>{'2018 - 2020'}</i>
          </p>
          <p>
            {
              'Chora was a name used for many projects, but one of the first uses of the name "chora" in relation to the work of Chora Studio was a side project for learning smart contract development in the Ethereum ecosystem. The smart contracts were designed for decentralized organizations (or "DAOs"). Users could interact with the smart contracts through a web application.'
            }
          </p>
          <p>
            {
              'At a later point, Chora became a decentralized organization deployed with the Colony smart contracts. The organization was never operational but the vision was "simple and secure technologies for small-scale farmers" and this vision would be pursued through ethnographic research, media production, software development, and building with open-source hardware.'
            }
          </p>
          <p>{'languages/tools:'}</p>
          <i>{'Solidity, Truffle, Typescript, React, IPFS'}</i>
          <p>{'source code:'}</p>
          <i>{'unavailable'}</i>
        </div>
      </div>
    </div>
  )
}

export default PrototypesPage
