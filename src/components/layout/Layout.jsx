import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import { Container } from '../../templates/container/container'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
export { Layout }
