import PropTypes from 'prop-types'
import { TbChevronRight } from 'react-icons/tb'
import './breadCrumbs.scss'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ currentTitle }) => {
  return (
    <div className='main-bread'>
      <ul>
        <li>
          <Link className='bread-link' to='/'>
            Главная
          </Link>
        </li>
        <TbChevronRight />
        <li>
          <Link className='bread-link' to='#'>
            {currentTitle}
          </Link>
        </li>
      </ul>
      {/* <div className='home-page'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/ '>Главная</a>
            </li>я
            <li className='breadcrumb-item active' aria-current='page'>
              {currentTitle}
            </li>
          </ol>
        </nav>
      </div>
      <div className='mt-2'>
        <h2>{currentTitle}</h2>
      </div> */}
    </div>
  )
}

BreadCrumbs.propTypes = {
  currentTitle: PropTypes.string,
}
export { BreadCrumbs }
