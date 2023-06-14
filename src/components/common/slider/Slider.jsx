import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { CardItem } from '../../../templates/cardItem/CardItem'
import PropTypes from 'prop-types'
import 'swiper/scss'
import 'swiper/scss/navigation'
import './slider.scss'

const Slider = ({ propsItems }) => {
  console.log(propsItems)
  return (
    <>
      <div className='slider'>
        <Swiper
          direction='horizontal'
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          speed={800}
          loop={true}
          navigation={true}
          grabCursor={true}
          modules={[Navigation]}
          className='mySwiper'>
          {Object.keys(propsItems).map((item) => (
            <SwiperSlide key={propsItems[item].id}>
              <CardItem dataItem={propsItems[item]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

Slider.propTypes = {
  propsItems: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export { Slider }
