import { NavLink } from 'react-router-dom'
import { MobilNavBar } from '../common/mobilNavBar/mobilNavBar'
import { PCnavBar } from '../common/pcNavBar/pcNavBar'
// import { ModalMenu } from '../modalMenu/modalMenu'
import { Spinner } from '../common/spinner/spinner'

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
  return (
    <>
      <div className='navbar__container'>
        <div className='menu_nav'>
          <div className='wave wave1'></div>
          <div className='wave wave2'></div>
          <div className='wave wave3'></div>
          <div className='wave wave4'></div>

          <div className='navbar__content__mobile'>
            <MobilNavBar />
            {/* <ModalMenu /> */}
          </div>

          <div className='navbar__content__pc'>
            <PCnavBar />
          </div>
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
    </>
  )
}

export { Header }
