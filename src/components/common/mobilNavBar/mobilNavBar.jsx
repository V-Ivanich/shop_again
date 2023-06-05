import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ReactComponent as Burger } from '../../../image/burger.svg'
import { ReactComponent as Heart } from '../../../image/Heart.svg'
import { ReactComponent as Mens } from '../../../image/Mens.svg'
import { ReactComponent as Basket } from '../../../image/Basket.svg'
import { ModalMenu } from '../../modalMenu/modalMenu'
import './mobilNavBar.scss'

const MobilNavBar = () => {
  const [smShow, setSmShow] = useState(false)
  const handleClick = () => {
    setSmShow(true)
  }
  return (
    <>
      <ModalMenu smShow={smShow} setSmShow={setSmShow} />
      <div className='navbar__content__mobile'>
        <div className='navbar__content__menu w-100'>
          <div className='left__element__menu'>
            <div className='icons-box' onClick={handleClick}>
              <Burger className='icons' />
            </div>
            <NavLink to='#'>DRIVE MOTO</NavLink>
          </div>

          <div className='right__element__icons'>
            <div className='icons-box'>
              <a href='#'>
                <Heart className='icons' />
              </a>
            </div>

            <div className='icons-box'>
              <a className='position-relative' href='#'>
                <Mens className='icons' />
                <span className='position-absolute top-50 start-100 translate-middle text-success'>
                  &#10003;
                </span>
              </a>
            </div>

            <div className='icons-box'>
              <a className='position-relative' href='#'>
                <Basket className='icons' />
                <small className='position-absolute top-100 start-100 translate-middle badge rounded-pill bg-badge text-info'>
                  {/* {countBasket} */}0
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { MobilNavBar }
