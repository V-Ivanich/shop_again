import { NavLink } from 'react-router-dom'
import { ReactComponent as Burger } from '../../../image/burger.svg'
import { ReactComponent as Heart } from '../../../image/Heart.svg'
import { ReactComponent as Mens } from '../../../image/Mens.svg'
import { ReactComponent as Basket } from '../../../image/Basket.svg'
import './mobilNavBar.scss'

const MobilNavBar = () => {
  return (
    <>
      <div className='navbar__content__mobile'>
        <div className='navbar__content__menu w-100'>
          <div className='left__element__menu'>
            <div className='icons-box'>
              <a href='/likes'>
                <Burger className='icons' />
              </a>
            </div>
            <NavLink to='/'>DRIVE MOTO</NavLink>
          </div>

          <div className='right__element__icons'>
            <div className='icons-box'>
              <a href='/likes'>
                <Heart className='icons' />
              </a>
            </div>

            <div className='icons-box'>
              <a className='position-relative' href='/login'>
                <Mens className='icons' />
                <span className='position-absolute top-50 start-100 translate-middle text-success'>
                  &#10003;
                </span>
              </a>
            </div>

            <div className='icons-box'>
              <a className='position-relative' href='/basket'>
                <Basket className='icons' />
                <small className='position-absolute top-100 start-100 translate-middle badge rounded-pill bg-badge text-info'>
                  {/* {countBasket} */}0
                </small>
              </a>
            </div>
          </div>
        </div>
        <div className='navbar__content__menu__bottom'>
          <div className='d-flex justify-content-start'>
            <NavLink className='nav-links' to='/shops'>
              <strong>Магазины</strong>
            </NavLink>
          </div>
          <div className='d-flex justify-content-center'>
            <NavLink className='nav-links' to='/action'>
              <strong>Акции</strong>
            </NavLink>
          </div>
          <div className='d-flex justify-content-center'>
            <NavLink className='nav-links d-flex' to='/case'>
              Доставка и оплата
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export { MobilNavBar }
