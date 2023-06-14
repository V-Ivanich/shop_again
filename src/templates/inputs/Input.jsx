import PropTypes from 'prop-types'
import classNames from 'classnames'
import './input.scss'

const Input = ({ id, className, label, error, ...attrs }) => {
  const classes = classNames('input', className, { error })

  return (
    <div className='input-wrapper'>
      {label && (
        <label className='input-label' htmlFor={id}>
          {label}
        </label>
      )}
      {attrs.required && <span className='input-required'>Required</span>}
      <input name={id} id={id} className={classes} {...attrs} />
      {error && <span className='input-error'>{error}</span>}
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
}

export { Input }
