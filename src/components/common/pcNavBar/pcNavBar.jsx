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
import PropTypes from 'prop-types'
import './pcNavBar.scss'

const PCnavBar = ({ onClick, theme, setVisible }) => {
  return (
    <>
      <div className='pc__container'>
        <div className='burger__menu' onClick={() => setVisible(true)}>
          <IoReorderThree size='2rem' />
        </div>
        <div className='mobile__logo'>
          <h3>DRIVE MOTO</h3>
        </div>

        <div className=' div-1 navs-links'>
          <Link to='/shops'>
            <strong>Магазины</strong>
          </Link>
        </div>
        <div className='div-2 navs-links'>
          <Link to='/action'>
            <strong>Акции</strong>
          </Link>
        </div>
        <div className='div-3 navs-links'>
          <Link to='/case'>
            <strong>Доставка и оплата</strong>
          </Link>
        </div>
        <div className='div-4'>
          <Link to='/'>
            <Logo className={theme == 'dark' ? 'icons' : ''} />
          </Link>
        </div>
        <div className='div-5 navs-links'>
          <Link className='nav-links__location' to='/map'>
            <div className='icons__map'>
              <MdOutlineLocationOn size='1.5rem' />
            </div>

            <strong>Москва,ул.Науки 25</strong>
          </Link>
        </div>
        <div className='div-6'>
          <div className='icons-box navs-links'>
            <a href='/about'>
              <IoHeartOutline size='1.5rem' className='icons-size' />
            </a>
          </div>

          <div className='icons-box navs-links'>
            <a href='/about'>
              <TbUser size='1.5rem' className='icons-size' />
            </a>
          </div>

          <div className='icons-box navs-links'>
            <a href='/about'>
              <TbShoppingCart size='1.5rem' className='icons-size' />
              <small className='count-product'>{/* {countBasket} */}55</small>
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
            <strong>{theme}</strong>
          </span>
        </div>
      </div>
    </>
  )
}

PCnavBar.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func,
  setVisible: PropTypes.func,
}
export { PCnavBar }
