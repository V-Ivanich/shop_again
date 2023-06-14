import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import kater from '../../../image/gidrotsikl.png'
import oneImg from '../../../image/katera.jpg'
import twoImg from '../../../image/kvadrohod.jpg'
import theeImg from '../../../image/snegohod.jpg'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import './carouselBaner.scss'

const CarouselBaner = () => {
  return (
    <>
      <div className='slider'>
        <Swiper
          direction='horizontal'
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={0}
          navigation={true}
          pagination={{ clickable: true }}
          centeredSlides={false}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          className='mySwiper'>
          <SwiperSlide className='swiper-slide'>
            <img src={kater} />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src={oneImg} />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src={twoImg} />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src={theeImg} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export { CarouselBaner }
