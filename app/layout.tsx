import Header from '@/components/header'
import PageWrapper from '@/components/page-wrapper'
import QueryProvider from '@/components/contexts/query-client-context'
import '@/styles/globals.css'

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang='en'>
    <body>
      <Header />
      <PageWrapper>
        <QueryProvider>{children}</QueryProvider>
      </PageWrapper>
    </body>
  </html>
)

export default RootLayout
