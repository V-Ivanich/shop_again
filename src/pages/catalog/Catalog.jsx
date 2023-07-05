import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BreadCrumbs } from '../../components/common/breadCrumbs/BreadCrumbs'
import { HttpService } from '../../services/http.service'
import { CardItem } from '../../templates/cardItem/CardItem'
import CustomizedAccordions from '../../components/common/accordion/Accordion'
import './catalog.scss'

const Catalog = () => {
  const [dataCatalog, setDataCatalog] = useState([])
  const params = useParams().catalog
  const baseEndPoint = `http://localhost:3001/${params}`

  useEffect(() => {
    async function getData() {
      try {
        await HttpService.get(baseEndPoint).then((res) =>
          setDataCatalog(res.data),
        )
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [params])

  return (
    <>
      {dataCatalog.length ? (
        <div className='catalog-main'>
          <BreadCrumbs currentTitle={dataCatalog[0].category} />
          <div className='catalog-title'>
            <h2>{dataCatalog[0].category}</h2>
          </div>
          <div className='catalog-body'>
            <div className='catalog-filter-block'>
              <CustomizedAccordions />
            </div>
            <div className='catalog-list-items'>
              {dataCatalog.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export { Catalog }
