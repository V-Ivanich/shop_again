// import { Carousel, CarouselItem } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import kater from '../../../image/gidrotsikl.png'
import oneImg from '../../../image/katera.jpg'
import twoImg from '../../../image/kvadrohod.jpg'
import theeImg from '../../../image/snegohod.jpg'
import 'swiper/scss'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './carouselBaner.scss'

const CarouselBaner = () => {
  return (
    <>
      <div className='slider'>
        <Swiper
          // direction='horizontal'
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          // centeredSlides={true}
          // slidesPerView={1}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // speed={800}
          loop={true}
          className='mySwiper'>
          <SwiperSlide>
            <img src={kater} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={oneImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={twoImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={theeImg} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export { CarouselBaner }
