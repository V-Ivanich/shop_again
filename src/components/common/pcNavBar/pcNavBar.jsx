import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../image/logo.svg'
import maps from '../../../image/maps.svg'
import { ReactComponent as Heart } from '../../../image/Heart.svg'
import { ReactComponent as Mens } from '../../../image/Mens.svg'
import { ReactComponent as Basket } from '../../../image/Basket.svg'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import './pcNavBar.scss'

const PCnavBar = ({ onClick, theme }) => {
  return (
    <>
      <div className='pc__container'>
        <div className=' div-1'>
          <NavLink className='nav-links' to='/shops'>
            <strong>Магазины</strong>
          </NavLink>
        </div>
        <div className='div-2'>
          <NavLink className='nav-links' to='/action'>
            <strong>Акции</strong>
          </NavLink>
        </div>
        <div className='div-3'>
          <NavLink className='nav-links' to='/case'>
            <strong>Доставка и оплата</strong>
          </NavLink>
        </div>
        <div className='div-4'>
          {/* <NavLink to='/'> */}
          <Logo className={theme == 'dark' ? 'icons' : ''} />
          {/* </NavLink> */}
        </div>
        <div className='div-5'>
          <NavLink className='nav-links d-flex align-items-center' to='/map'>
            <div className='icons__map'>
              <img
                className={theme == 'dark' ? 'icons' : ''}
                src={maps}
                alt='noLogo'
              />
            </div>

            <strong>Москва,ул.Науки 25</strong>
          </NavLink>
        </div>
        <div className='div-6'>
          <div className='icons-box'>
            <a className='ms-2' href='#'>
              <Heart className={theme == 'dark' ? 'icons' : ''} />
            </a>
          </div>

          <div className='icons-box'>
            <a className='ms-3 position-relative' href='#'>
              <Mens className={theme == 'dark' ? 'icons' : ''} />
              <span className='position-absolute top-0 start-100 translate-middle text-success'>
                &#10003;
              </span>
            </a>
          </div>

          <div className='icons-box'>
            <a className='ms-3 position-relative' href='#'>
              <Basket className={theme == 'dark' ? 'icons' : ''} />
              <small className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-badge text-info'>
                {/* {countBasket} */}0
              </small>
            </a>
          </div>
        </div>
        <div className='div-7' onClick={onClick}>
          {theme === 'light' ? (
            <IoMoonOutline size='16px' />
          ) : (
            <IoMoon size='16px' />
          )}

          <span style={{ marginLeft: '0.5rem' }}>
            <strong>{theme}</strong>
          </span>
        </div>
      </div>
    </>
  )
}

export { PCnavBar }
