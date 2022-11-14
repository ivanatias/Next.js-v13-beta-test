interface Props {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => (
  <main className='pageWrapper'>{children}</main>
)

export default PageWrapper
