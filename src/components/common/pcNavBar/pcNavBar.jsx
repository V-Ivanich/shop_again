import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../image/logo.svg'
import { ReactComponent as Mens } from '../../../image/Mens.svg'
import { ReactComponent as Basket } from '../../../image/Basket.svg'
import {
  IoMoon,
  IoMoonOutline,
  IoReorderThree,
  IoHeartOutline,
} from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'
import { TbUserCheck, TbUser, TbShoppingCart } from 'react-icons/tb'
import './pcNavBar.scss'

const PCnavBar = ({ onClick, theme }) => {
  return (
    <>
      <div className='pc__container'>
        <div className='burger__menu'>
          <IoReorderThree size='2rem' />
        </div>
        <div className='mobile__logo'>
          <h5>DRIVE MOTO</h5>
        </div>

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
          <NavLink className='nav-links__location' to='/map'>
            <div className='icons__map'>
              <MdOutlineLocationOn
                size='1.5rem'
                className={theme == 'dark' ? 'icons' : ''}
              />
            </div>

            <strong>Москва,ул.Науки 25</strong>
          </NavLink>
        </div>
        <div className='div-6'>
          <div className='icons-box'>
            <a className='ms-2' href='#'>
              <IoHeartOutline
                size='1.5rem'
                className={theme == 'dark' ? 'icons' : ''}
              />
              {/* <Heart className={theme == 'dark' ? 'icons' : ''} /> */}
            </a>
          </div>

          <div className='icons-box'>
            <a className='ms-3 position-relative' href='#'>
              <TbUser
                size='1.5rem'
                className={theme == 'dark' ? 'icons' : ''}
              />
              {/* <Mens className={theme == 'dark' ? 'icons' : ''} /> */}
            </a>
          </div>

          <div className='icons-box'>
            <a href='#'>
              <TbShoppingCart
                size='1.5rem'
                className={theme == 'dark' ? 'icons' : ''}
              />
              {/* <Basket className={theme == 'dark' ? 'icons' : ''} /> */}
              <small className='count-product'>{/* {countBasket} */}0</small>
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
