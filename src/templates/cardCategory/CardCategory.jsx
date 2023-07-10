import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './cardCategory.scss'

const CardCategory = ({ itemCategories }) => {
  console.log(itemCategories)
  const urlImage = `/src/image/${itemCategories.images}`
  return (
    <div className='wrapper-category'>
      <div className='left-content'>
        <strong className='title-category'>{itemCategories.name}</strong>
        <Link to={itemCategories.links} className='link-to'>
          Подробнее &gt;
        </Link>
      </div>
      <div className='image-content'>
        <img src={urlImage} alt='error' />
      </div>
    </div>
  )
}

CardCategory.propTypes = {
  itemCategories: PropTypes.object.isRequired,
}
export { CardCategory }
