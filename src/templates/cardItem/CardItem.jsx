import { TbShoppingCart } from 'react-icons/tb'
import { IoHeartOutline } from 'react-icons/io5'
import Drive from '../../image/motor.png'
import './cardItem.scss'

const CardItem = () => {
  return (
    <div className='wrapper-carditem'>
      <div className='top-block'>
        <IoHeartOutline size='24' className='likes' />
      </div>
      <div className='image-block'>
        <img src={Drive} alt='no photo' />
      </div>
      <div className='title-block'>Спасательный жилет BRP Mens Airflow PFD</div>
      <div className='price-block'>6900P</div>
      <div className='footer-block'>
        <div className='button-basket'>
          <TbShoppingCart size='24' />
        </div>
      </div>
    </div>
  )
}

export { CardItem }
