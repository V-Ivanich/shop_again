import PropTypes from 'prop-types'
import './container.scss'

const Container = ({ children }) => {
  return (
    <>
      <div className='main__container'>{children}</div>
    </>
  )
}
Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export { Container }
