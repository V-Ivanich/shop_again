import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './cardCategory.scss'

const CardCategory = ({ itemCategories }) => {
  return (
    <div className='wrapper-category'>
      <div className='left-content'>
        <strong className='title-category'>{itemCategories.name}</strong>
        <Link to='#' className='link-to'>
          Подробнее &gt;
        </Link>
      </div>
      <div className='image-content'>
        <img src={itemCategories.image} alt='error' />
      </div>
    </div>
  )
}

CardCategory.propTypes = {
  itemCategories: PropTypes.object.isRequired,
}
export { CardCategory }
