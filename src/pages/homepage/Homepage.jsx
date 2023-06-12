import { CarouselBaner } from '../../components/common/caruselAndBaner/carouselBaner'
import { CardItem } from '../../templates/cardItem/CardItem'
import { CardCategory } from '../../templates/cardCategory/CardCategory'
import { getCatalog } from '../../testBasa/basa'
import './homepage.scss'

const Homepage = () => {
  const catalog = getCatalog.slice(0, 6)
  return (
    <>
      <div className='wrapper-home__baner'>
        <CarouselBaner />
        <CardItem />
      </div>
      <div className='wrapper-home__category'>
        {catalog.map((itemCategori) => (
          <CardCategory key={itemCategori.id} itemCategories={itemCategori} />
        ))}
      </div>
    </>
  )
}
export { Homepage }
