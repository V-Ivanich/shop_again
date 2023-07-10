import { useParams } from 'react-router-dom'
import { BreadcrumbsLinks } from '../../components/common/breadcrumbs/BreadCrumbs'
import { useGetGoodsQuery } from '../../redux/goodsApi'
import { GoodsInfo } from '../../components/common/goodsInfo/GoodsInfo'
import { Button } from '@mui/material'
import './unitOfGoods.scss'

const UnitOfGoods = () => {
  const { id, catalog } = useParams()
  const { data = [] } = useGetGoodsQuery(catalog)

  if (!data.length) {
    return 'Loading...'
  }
  const goodsItem = data.find((item) => item.id === id)
  const imagesItem = `/src/image/${goodsItem.images}`
  console.log(imagesItem)
  return (
    <>
      <div className='goodsItem-page'>
        <BreadcrumbsLinks catalog={goodsItem.category} model={goodsItem.name} />

        <div className='goodsItem-description'>
          <div className='goodsItem-image__container'>
            <div className='goodsItem-image__heder'></div>
            <div className='goodsItem-image__image'>
              <img
                className='goodsItem-image'
                alt='No photo'
                src={imagesItem}
              />
            </div>
            <div className='price-line'>{goodsItem.price} &#8381;</div>
          </div>
          <div className='goodsItem-image__contents'>
            <h1 style={{ marginBottom: '2rem' }}>{goodsItem.brand}</h1>
            <GoodsInfo propertyList={goodsItem} />
            <Button sx={{ mt: 4 }} variant='outlined'>
              КУПИТЬ
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export { UnitOfGoods }
