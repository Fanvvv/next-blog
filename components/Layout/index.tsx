import type { NextPage } from 'next'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

interface Prop{
  children: React.ReactNode
}

const Layout: NextPage<Prop> = (prop) => {
  const { children } = prop
  return (
    <div>
      <Navbar />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout
