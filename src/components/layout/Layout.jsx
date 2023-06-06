import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import './layout.scss'

const Layout = () => {
  return (
    <>
      <div className='layout__container'>
        <Header />
        <main className='outlet__container'>
          <Outlet />
        </main>
      </div>
    </>
  )
}
export { Layout }
