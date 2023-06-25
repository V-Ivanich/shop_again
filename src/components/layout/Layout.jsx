import { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Container } from '../../templates/container/container'
import { TbCircleChevronUp } from 'react-icons/tb'
import './layout.scss'

const Layout = () => {
  const [scroll, setScroll] = useState(false)
  const toTop = useRef(null)

  const handlerUp = () => {
    toTop.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > document.documentElement.clientHeight) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <>
      <div className='rootbody' ref={toTop}>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
        <div
          className={scroll ? 'btn-scroll-up-activ' : 'hidden-scroll'}
          onClick={handlerUp}>
          <TbCircleChevronUp className='arrow-up' size={45} />
        </div>
      </div>
    </>
  )
}
export { Layout }
