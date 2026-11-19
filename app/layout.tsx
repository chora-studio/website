'use client'

import { Background, Footer, Header, Sidebar } from 'components'
import { MenuContextProvider, ThemeContextProvider } from 'contexts'

import './globals.css'

const Layout = ({ children }: any) => (
  <html lang="en">
    <body>
      <ThemeContextProvider>
        <MenuContextProvider>
          <Background />
          <Header
            title={{
              link: '/',
              titleX: 'studio',
            }}
            items={[
              {
                link: '/research',
                title: 'research',
                target: '',
              },
              {
                link: '/prototypes',
                title: 'prototypes',
                target: '',
              },
              {
                link: '/services',
                title: 'services',
                target: '',
              },
              'divider',
              {
                link: 'https://git.chora.studio/explore/repos',
                title: 'git',
                target: '_blank',
              },
              {
                link: '/research/feed',
                title: 'rss',
                target: '_blank',
              },
            ]}
            showMenuButton={true}
            showMobileTitle={true}
          />
          <Sidebar
            items={[
              {
                link: '.',
                target: '',
                title: 'home',
              },
              {
                link: 'research',
                target: '',
                title: 'research',
              },
              {
                link: 'prototypes',
                target: '',
                title: 'prototypes',
              },
              {
                link: 'services',
                target: '',
                title: 'services',
              },
              {
                link: 'https://git.chora.studio/explore/repos',
                title: 'git',
                target: '_blank',
              },
              {
                link: '/research/feed',
                title: 'rss',
                target: '_blank',
              },
            ]}
            mobileOnly={true}
          />
          <main>{children}</main>
          <Footer
            about={{
              title: 'about',
              text: (
                <p>
                  {
                    'Chora Studio is a software research and development company.'
                  }
                </p>
              ),
            }}
            sections={[
              {
                title: 'chora studio',
                items: [
                  {
                    link: '/research',
                    target: '',
                    title: 'research',
                  },
                  {
                    link: '/prototypes',
                    target: '',
                    title: 'prototypes',
                  },
                  {
                    link: '/services',
                    target: '',
                    title: 'services',
                  },
                ],
              },
              {
                title: 'more links',
                items: [
                  {
                    link: 'https://git.chora.studio/explore/repos',
                    title: 'git',
                    target: '_blank',
                  },
                  {
                    link: '/research/feed',
                    title: 'rss',
                    target: '_blank',
                  },],
              },
            ]}
          />
        </MenuContextProvider>
      </ThemeContextProvider>
    </body>
  </html>
)

export default Layout
