import { Slider } from '../slider/Slider'
import PropTypes from 'prop-types'
import './popularGoods.scss'

const PopularGuds = ({ goods }) => {
  console.log(goods)
  return (
    <>
      <div className='wrapper-goodspop'>
        <h2>Популярные товары</h2>
        <div className='slider-goodspop'>
          <Slider propsItems={goods} />
        </div>
      </div>
    </>
  )
}

PopularGuds.propTypes = {
  goods: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}
export { PopularGuds }
