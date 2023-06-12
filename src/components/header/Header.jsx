import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PCnavBar } from '../common/pcNavBar/pcNavBar'
import { Spinner } from '../common/spinner/spinner'
import { Container } from '../../templates/container/container'
import { ShadowPanel } from '../common/mobileWindow/shadowPanel'
import { getCatalog } from '../../testBasa/basa'

import './header.scss'

const Header = () => {
  const [theme, setTheme] = useState('light')
  const [visibleMobilePanel, setVisibleMobilePanel] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <Container>
      <ShadowPanel
        visibleMobilePanel={visibleMobilePanel}
        setVisibleMobilePanel={setVisibleMobilePanel}
      />
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
            setVisible={setVisibleMobilePanel}
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
