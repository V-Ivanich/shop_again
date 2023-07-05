import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { Link, useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import './breadcrumbs.scss'

const BreadcrumbsLinks = ({ catalog }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  const breadcrumbs = [
    <Link underline='hover' key='1' to='/' className='bread'>
      Главная
    </Link>,
    <Link
      underline='hover'
      key='2'
      to='#'
      className='bread'
      onClick={handleClick}>
      {catalog}
    </Link>,
    <Typography key='3' color='text.primary' className='bread'>
      Breadcrumb
    </Typography>,
  ]

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator='›' aria-label='breadcrumb'>
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}

export { BreadcrumbsLinks }
