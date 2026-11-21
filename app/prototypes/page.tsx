import { Metadata } from 'next'

import styles from './page.module.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'chora studio | prototypes',
}

const PrototypesPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1>{'prototypes'}</h1>
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
              'Chai is a multi-agent management system. Chai includes a command-line interface and a desktop application. Chai is also a research project exploring agentic systems and specification-driven development practices.'
            }
          </p>
          <p>
            <b>{'tech stack'}</b>
          </p>
          <i>{'Rust, LLMs'}</i>
          <p>
            <b>{'source code'}</b>
          </p>
          <ul>
            <li>
              <a href="https://github.com/chora-studio/chai" target="_blank">
                {'https://github.com/chora-studio/chai'}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chora-studio/chai-examples"
                target="_blank"
              >
                {'https://github.com/chora-studio/chai-examples'}
              </a>
            </li>
          </ul>
          <hr />
          <h2>{'chora'}</h2>
          <p>
            <i>{'2026 - present'}</i>
          </p>
          <p>
            {
              'Chora is an open protocol in its early design phase. Chora is also a research project exploring decentralized protocols, knowledge graphs, and how the two intersect. Check back soon for more information.'
            }
          </p>
          <p>
            <b>{'website'}</b>
          </p>
          <a href="https://chora.io" target="_blank">
            {'https://chora.io'}
          </a>
          <p>
            <b>{'tech stack'}</b>
          </p>
          <i>{'Rust, Typescript, React, Nostr, IPFS'}</i>
          <p>
            <b>{'source code'}</b>
          </p>
          <ul>
            <li>
              <a href="https://github.com/chora-io" target="_blank">
                {'https://github.com/chora-io'}
              </a>
            </li>
          </ul>
          <hr />
          <h2>{'chora (distributed ledger technology)'}</h2>
          <p>
            <i>{'2022 - 2025'}</i>
          </p>
          <p>
            {
              'Chora started out as a generic blockchain application that was used to test inter-blockchain communication with Regen Ledger. Chora later became a software stack built to support and extend Regen Ledger and to provide improved support for proof-of-authority in the Cosmos ecosystem.'
            }
          </p>
          <p>
            {
              'Chora was described as "software for commons governance and ecological regeneration built with distributed ledger technology." The stack included a blockchain application, blockchain modules, an indexing service, three web applications (Groups, Registry, and Ledger), and developer tools.'
            }
          </p>
          <p>
            {
              'In addition to building the stack, Chora Studio also operated validators on Regen mainnet and Regen and Chora test networks. Chora applications and services used the public full nodes operated by '
            }
            <Link href="/validator">{'Chora Validator'}</Link>
            {'.'}
          </p>
          <p>
            <b>{'tech stack'}</b>
          </p>
          <i>{'Go, Cosmos SDK, Typescript, React, Postgres, IPFS'}</i>
          <p>
            <b>{'source code'}</b>
          </p>
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
          <h2>{'chora (simple and secure technologies)'}</h2>
          <p>
            <i>{'2020'}</i>
          </p>
          <p>
            {
              'Chora was a decentralized organization (or "DAO") deployed using Colony smart contracts. The organization itself was never operational but the vision was "simple and secure technologies for small farmers" and it was pursued through ethnographic research, media production, software development, and building prototypes with open-source hardware.'
            }
          </p>
          <p>
            {
              'A few short videos were produced from interviews with people working on small-scale farms. The interviewees were asked about the technologies they use and their relationship to technology. Alongside field research and video production, mesh networks and smart (or "simple and secure") devices were being built and tested using open-source hardware.'
            }
          </p>
          <p>
            <b>{'film kit'}</b>
          </p>
          <i>{'Canon Mark ii, Zoom H4n, OpenShot'}</i>
          <p>
            <b>{'tech stack'}</b>
          </p>
          <i>{'Typescript, React, Arduino, RaspberryPi'}</i>
          <hr />
          <h2>{'chora (decentralized organizations)'}</h2>
          <p>
            <i>{'2018'}</i>
          </p>
          <p>
            {
              'Chora was a name for many projects, but the first project named Chora related to the work of Chora Studio was a side project for learning how to build applications with smart contracts in the Ethereum ecosystem. Chora was a web application and a set of smart contracts built for decentralized organizations (or "DAOs") operating on the Ethereum blockchain.'
            }
          </p>
          <p>
            <b>{'tech stack'}</b>
          </p>
          <i>{'Solidity, Truffle, Typescript, React, IPFS'}</i>
        </div>
      </div>
    </div>
  )
}

export default PrototypesPage
