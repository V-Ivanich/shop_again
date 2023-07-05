import { useNavigate } from 'react-router-dom'
import { TbShoppingCart } from 'react-icons/tb'
import { IoHeartOutline } from 'react-icons/io5'
import PropTypes from 'prop-types'
import './cardItem.scss'

const CardItem = ({ dataItem }) => {
  const navigate = useNavigate()

  const handleClickCard = () => {
    navigate(dataItem.id)
  }

  return (
    <div className='wrapper-carditem'>
      <div className='top-block'>
        <IoHeartOutline size='24' className='likes' />
      </div>
      <div className='image-block' onClick={handleClickCard}>
        <img src={dataItem.images} alt='no photo' />
      </div>
      <div className='title-block'>
        {dataItem.name}
        {dataItem.brand}
      </div>
      <div className='price-block'>{dataItem.price} &#8381;</div>
      <div className='footer-block'>
        <div className='button-basket'>
          <TbShoppingCart size='24' />
        </div>
      </div>
    </div>
  )
}

CardItem.propTypes = {
  dataItem: PropTypes.object,
}
export { CardItem }
