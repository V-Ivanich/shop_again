import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { BreadcrumbsLinks } from '../../components/common/breadcrumbs/BreadCrumbs'
import './unitOfGoods.scss'

const UnitOfGoods = () => {
  const { id, catalog } = useParams()
  console.log(id)
  return (
    <>
      <Container>
        <BreadcrumbsLinks catalog={catalog} />
      </Container>
    </>
  )
}

export { UnitOfGoods }
