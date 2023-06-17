import { useParams } from 'react-router-dom'
import { BreadCrumbs } from '../../components/common/breadCrumbs/BreadCrumbs'
import './catalog.scss'

const Catalog = () => {
  const params = useParams()
  console.log(params)
  return (
    <>
      <BreadCrumbs currentTitle={params.catalog} />
      <div>Catalog</div>
    </>
  )
}

export { Catalog }
