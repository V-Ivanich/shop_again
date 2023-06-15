import { CarouselBaner } from '../../components/common/caruselAndBaner/carouselBaner'
import { CardItem } from '../../templates/cardItem/CardItem'
import { CardCategory } from '../../templates/cardCategory/CardCategory'
import { getCatalog } from '../../testBasa/basa'
import { Search } from '../../components/common/search/Search'
import { Goods } from '../../testBasa/goods'
import { PopularGuds } from '../../components/common/popularGoods/PopularGoods'
import './homepage.scss'

const Homepage = () => {
  const catalog = getCatalog.slice(0, 6)

  return (
    <>
      <div className='wrapper-home__baner'>
        <CarouselBaner />
        <CardItem dataItem={Goods[6]} />
      </div>
      <Search />
      <div className='wrapper-home__category'>
        {catalog.map((itemCategori) => (
          <CardCategory key={itemCategori.id} itemCategories={itemCategori} />
        ))}
      </div>
      <div className='popular-goods'>
        <PopularGuds goods={Goods} />
      </div>
    </>
  )
}
export { Homepage }
