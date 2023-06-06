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
      {/* <div className='baner-carousel'>
        <Carousel controls={false} indicators={false}>
          <CarouselItem>
            <img className='d-block w-100' src={kater} alt='Photo0' />
            <Carousel.Caption>
              <h1 className='text-light'>Почувствуй скорость и экстрим</h1>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className='d-block w-100' src={oneImg} alt='Photo1' />
            <Carousel.Caption>
              <h1 className='text-dark'>Отдыхай и наслаждайся!</h1>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className='d-block w-100' src={twoImg} alt='Photo2' />
            <Carousel.Caption>
              <h1 className='text-warning'>Для тебя нет преград</h1>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className='d-block w-100' src={theeImg} alt='Photo3' />
            <Carousel.Caption>
              <h1 className='text-warning'>И снег не помеха</h1>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        < className='baner'>{/* <CardTemplate dataItem={sale} /> */}
      {/* </div>  */}
    </>
  )
}

export { CarouselBaner }
