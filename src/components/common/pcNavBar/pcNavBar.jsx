import { NavLink } from 'react-router-dom'
import logo from '../../../image/logo.svg'
import maps from '../../../image/maps.svg'
import { ReactComponent as Heart } from '../../../image/Heart.svg'
import { ReactComponent as Mens } from '../../../image/Mens.svg'
import { ReactComponent as Basket } from '../../../image/Basket.svg'
import Col from 'react-bootstrap/Col'
import './pcNavBar.scss'

const PCnavBar = () => {
  return (
    <>
      <div className='pc__container'>
        <Col className=' col-1 d-flex justify-content-start'>
          <NavLink className='nav-links' to='/shops'>
            <strong>Магазины</strong>
          </NavLink>
        </Col>
        <Col className='col-2 d-flex justify-content-center'>
          <NavLink className='nav-links' to='/action'>
            <strong>Акции</strong>
          </NavLink>
        </Col>
        <Col className='col-2 d-flex justify-content-center'>
          <NavLink className='nav-links' to='/case'>
            <strong>Доставка и оплата</strong>
          </NavLink>
        </Col>
        <Col className='col-2 d-flex justify-content-center'>
          <NavLink to='/'>
            <img src={logo} alt='noLogo' />
          </NavLink>
        </Col>
        <Col className='col-3 d-flex justify-content-center'>
          <NavLink className='nav-links d-flex align-items-center' to='/map'>
            <div className='icons__map'>
              <img className='mx-2' src={maps} alt='noLogo' />
            </div>

            <strong>Москва,ул.Науки 25</strong>
          </NavLink>
        </Col>
        <Col className='col-2 d-flex justify-content-center'>
          <div className='icons-box'>
            <a className='ms-2' href='/likes'>
              <Heart className='icons' />
            </a>
          </div>

          <div className='icons-box'>
            <a className='ms-3 position-relative' href='/login'>
              <Mens className='icons' />
              <span className='position-absolute top-0 start-100 translate-middle text-success'>
                &#10003;
              </span>
            </a>
          </div>

          <div className='icons-box'>
            <a className='ms-3 position-relative' href='/basket'>
              <Basket className='icons' />
              <small className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-badge text-info'>
                {/* {countBasket} */}0
              </small>
            </a>
          </div>
        </Col>
      </div>
    </>
  )
}

export { PCnavBar }
