import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { ReactComponent as User } from '../../image/Mens.svg'
import './modalMenu'

function ModalMenu({ smShow, setSmShow }) {
  return (
    <>
      <Modal
        size='sm'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'>
        <Modal.Header className='py-2' closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            DRIVE MOTO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='py-2'>
          <div className='field'>
            <Link to='/'>Войти</Link>
          </div>
          <div className='field'>
            <Link to='/'>Зарегистрироваться</Link>
          </div>
          <div className='field'>
            <Link to='/'>Избранное</Link>
          </div>
          <div className='field'>
            <Link to='/'>Корзина</Link>
          </div>
          <div className='field'>
            <Link to='/'>Магазины</Link>
          </div>
          <div className='field'>
            <Link to='/'>Акции</Link>
          </div>
          <div className='field'>
            <Link to='/'>Доставка/оплата</Link>
          </div>
          <div className='field'>
            <Link to='/'>Квадроциклы</Link>
          </div>
          <div className='field'>
            <Link to='/'>Катера</Link>
          </div>
          <div className='field'>
            <Link to='/'>Гидроциклы</Link>
          </div>
          <div className='field'>
            <Link to='/'>Лодки</Link>
          </div>
          <div className='field'>
            <Link to='/'>Вездеходы</Link>
          </div>
          <div className='field'>
            <Link to='/'>Снегоходы</Link>
          </div>
          <div className='field'>
            <Link to='/'>Двигатели</Link>
          </div>
          <div className='field'>
            <Link to='/'>Запчасти</Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
ModalMenu.propTypes = {
  smShow: PropTypes.bool,
  setSmShow: PropTypes.bool,
}
export { ModalMenu }
