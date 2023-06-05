import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
// import { Footer } from '../footer/Footer'
import './layout.scss'

const Layout = () => {
  return (
    <>
      <div className='layout__container'>
        <Header />
        <main className='outlet__container'>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
export { Layout }
