import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../image/logo.svg'
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
          <Link to='/shops'>
            <strong className='navs-links'>Магазины</strong>
          </Link>
        </div>
        <div className='div-2'>
          <Link to='/action'>
            <strong className='navs-links'>Акции</strong>
          </Link>
        </div>
        <div className='div-3'>
          <Link to='/case'>
            <strong className='navs-links'>Доставка и оплата</strong>
          </Link>
        </div>
        <div className='div-4'>
          {/* <Link to='/'> */}
          <Logo className={theme == 'dark' ? 'icons' : ''} />
          {/* </Link> */}
        </div>
        <div className='div-5'>
          <Link className='nav-links__location navs-links' to='/map'>
            <div className='icons__map'>
              <MdOutlineLocationOn size='1.5rem' />
            </div>

            <strong className='navs-links'>Москва,ул.Науки 25</strong>
          </Link>
        </div>
        <div className='div-6'>
          <div className='icons-box'>
            <a className='navs-links' href='#'>
              <IoHeartOutline size='1.5rem' />
            </a>
          </div>

          <div className='icons-box'>
            <a className='navs-links' href='#'>
              <TbUser size='1.5rem' />
            </a>
          </div>

          <div className='icons-box'>
            <a href='#' className='navs-links'>
              <TbShoppingCart size='1.5rem' />
              <small className='count-product'>{/* {countBasket} */}0</small>
            </a>
          </div>
        </div>
        <div className='div-7 navs-links' onClick={onClick}>
          {theme === 'light' ? (
            <IoMoonOutline size='16px' />
          ) : (
            <IoMoon size='16px' />
          )}

          <span style={{ marginLeft: '0.5rem' }}>
            <strong className='navs-links'>{theme}</strong>
          </span>
        </div>
      </div>
    </>
  )
}

export { PCnavBar }
