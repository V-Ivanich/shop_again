import { Carousel, CarouselItem } from 'react-bootstrap'
import kater from '../../../image/gidrotsikl.png'
import oneImg from '../../../image/katera.jpg'
import twoImg from '../../../image/kvadrohod.jpg'
import theeImg from '../../../image/snegohod.jpg'
import './carouselBaner.scss'

const CarouselBaner = () => {
  return (
    <>
      <div className='baner-carousel'>
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
        <div className='baner'>{/* <CardTemplate dataItem={sale} /> */}</div>
      </div>
    </>
  )
}

export { CarouselBaner }
