import PropTypes from 'prop-types'
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
            <li>Войти</li>
            <li>Регистрация</li>
            <li>Магазины</li>
            <li>Акции</li>
            <li>Доставка/оплата</li>
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
