import PropTypes from 'prop-types'
import { TbUser, TbShoppingCart, TbHome, TbTruckDelivery } from 'react-icons/tb'
import { IoHeartOutline } from 'react-icons/io5'
import { MdOutlinePercent } from 'react-icons/md'
import './shadowStyle.scss'

const ShadowPanel = ({ visibleMobilePanel, setVisibleMobilePanel }) => {
  return (
    <>
      <div
        className={
          visibleMobilePanel ? 'shadow-panel isvisible' : 'shadow-panel'
        }>
        <div className='shadow-panel__body'>
          <div className='button-close'>
            <button onClick={() => setVisibleMobilePanel(false)}>
              &#10008;
            </button>
          </div>
          <ul>
            <li>
              <TbUser />
              &nbsp; Войти
            </li>
            <li>
              <TbUser />
              &nbsp; Регистрация
            </li>
            <li>
              <IoHeartOutline />
              &nbsp; Избранное
            </li>
            <li>
              <TbShoppingCart />
              &nbsp; Корзина
            </li>
            <li>
              <TbHome />
              &nbsp; Магазины
            </li>
            <li>
              <MdOutlinePercent />
              &nbsp; Акции
            </li>
            <li>
              <TbTruckDelivery />
              &nbsp; Доставка/оплата
            </li>
            <li>Квадроциклы</li>
            <li>Гидроциклы</li>
            <li>Катера</li>
            <li>Снегоходы</li>
            <li>Вездеходы</li>
            <li>Двигатели</li>
            <li>Аксессуары</li>
          </ul>
        </div>
      </div>
    </>
  )
}

ShadowPanel.propTypes = {
  visibleMobilePanel: PropTypes.bool,
  setVisibleMobilePanel: PropTypes.func,
}
export { ShadowPanel }
