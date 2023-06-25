import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BreadCrumbs } from '../../components/common/breadCrumbs/BreadCrumbs'
import { HttpService } from '../../services/http.service'
import { CardItem } from '../../templates/cardItem/CardItem'
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
  }, [])

  console.log(dataCatalog)
  return (
    <>
      {dataCatalog.length ? (
        <div>
          <BreadCrumbs currentTitle={dataCatalog[0].category} />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {dataCatalog.map((item) => (
              <CardItem key={item.id} dataItem={item} />
            ))}
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export { Catalog }
