import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PCnavBar } from '../common/pcNavBar/pcNavBar'
import { Spinner } from '../common/spinner/spinner'
import { Container } from '../../templates/container/container'

import './header.scss'

const getCatalog = [
  {
    id: 'cat1',
    name: 'Квадроциклы',
    image: 'kvadro',
    links: 'quadro',
  },
  {
    id: 'cat2',
    name: 'Гидроциклы',
    image: 'gidrocikl',
    links: 'gidrotsikly',
  },
  {
    id: 'cat3',
    name: 'Катера',
    image: 'katera',
    links: 'launch',
  },
  {
    id: 'cat4',
    name: 'Снегоходы',
    image: 'snego',
    links: 'snowmobiles',
  },
  {
    id: 'cat5',
    name: 'Вездеходы',
    image: 'vezdehod',
    links: 'atvs',
  },
  {
    id: 'cat6',
    name: 'Двигатели',
    image: 'drive',
    links: 'engines',
  },
  {
    id: 'cat7',
    name: 'Аксессуары',
    links: 'accessories',
  },
]
const Header = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <Container>
      <div className='navbar__container'>
        <div className='menu_nav'>
          <div
            className={
              theme === 'light' ? 'wave wave1' : 'wave active wave1'
            }></div>
          <div
            className={
              theme === 'light' ? 'wave wave2' : 'wave active wave2'
            }></div>
          <div
            className={
              theme === 'light' ? 'wave wave3' : 'wave active wave3'
            }></div>
          <div
            className={
              theme === 'light' ? 'wave wave4' : 'wave active wave4'
            }></div>

          <PCnavBar
            className='navbar__content__pc'
            onClick={toggleTheme}
            theme={theme}
          />
        </div>

        <div className='navbar__content__bottom'>
          {!getCatalog ? (
            <Spinner />
          ) : (
            <div className='catalog'>
              {getCatalog.map((item) => (
                <NavLink
                  key={item.id}
                  className='nav-links'
                  aria-current='page'
                  to={item.links}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export { Header }
