import PropTypes from 'prop-types'
import './cardTemplate.scss'
// import { useNavigate } from 'react-router-dom'
// import { useBasket } from '../../store/zustandStore'
// import { useLikes } from '../../store/likesStore'
// import { useEffect, useState } from 'react'

const CardTemplate = ({ dataItem }) => {
  const [toggleBasket, setToggleBasket] = useState(false)
  const [toggleLikes, settoggleLikes] = useState(false)

  const basketFlag = useBasket((state) => state.coast)
  const addToBasket = useBasket((state) => state.addToBasket)
  const removeFromBasket = useBasket((state) => state.removeItem)
  const likesList = useLikes((state) => state.likes)
  const addLikes = useLikes((state) => state.addLikes)
  const removeLikes = useLikes((state) => state.removeLikes)

  useEffect(() => {
    const basket = basketFlag.find((b) => b.id === dataItem.id)
    if (basket) {
      setToggleBasket(true)
    } else {
      setToggleBasket(false)
    }
  }, [basketFlag])

  useEffect(() => {
    if (likesList.length === 0) {
      settoggleLikes(false)
    } else {
      const likes = likesList.find((like) => like.id === dataItem.id)
      if (likes) {
        settoggleLikes(true)
      } else {
        settoggleLikes(false)
      }
    }
  }, [likesList, addLikes])

  const navigate = useNavigate()

  const handleClickCard = () => {
    navigate(dataItem.id)
  }

  const handleToggleToBasket = () => {
    if (!toggleBasket) {
      addToBasket(dataItem)
    } else {
      removeFromBasket(dataItem.id)
    }
  }

  const handleToggleLikes = () => {
    if (!toggleLikes) {
      addLikes(dataItem)
    } else {
      removeLikes(dataItem.id)
    }
  }

  return (
    <>
      <div className='card_template'>
        <div className='card'>
          <div className='like' onClick={handleToggleLikes}>
            {!toggleLikes ? (
              <svg className='heart' width='24' height='22' viewBox='0 0 24 22'>
                <path d='M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z' />
              </svg>
            ) : (
              <svg
                className='heart-fill'
                width='24'
                height='22'
                viewBox='0 0 24 22'>
                <path d='M12 3.43498C10.011 -1.96402 0 -1.16202 0 7.00298C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.00298C24 -1.11502 14 -1.99602 12 3.43498Z' />
              </svg>
            )}
          </div>

          <div
            className='d-flex justify-content-center align-items-center for-images'
            onClick={handleClickCard}>
            <img src={dataItem.images} className='img-fluid' alt='no_foto' />
          </div>
          <div className='name-model'>
            <p className='card-text text-center m-0'>
              {dataItem.name}
              {dataItem.brand}
            </p>
            <p className='card-text text-center m-0'>{dataItem.model}</p>
          </div>

          <div className='price'>{dataItem.price} &#8381;</div>

          <div
            className={toggleBasket ? 'basket active-basket' : 'basket'}
            onClick={handleToggleToBasket}>
            <svg
              className='basket-item'
              width='30'
              height='23'
              viewBox='0 0 30 23'>
              <path d='M29.999 0L29.0703 2.5H26.659L22.3165 17.5H5.76777L-0.000976562 3.75H21.014L20.309 6.25H3.75902L7.43027 15H20.4653L24.7553 0H29.999ZM10.624 18.75C9.58902 18.75 8.74902 19.59 8.74902 20.625C8.74902 21.6612 9.58902 22.5 10.624 22.5C11.659 22.5 12.499 21.6612 12.499 20.625C12.499 19.59 11.659 18.75 10.624 18.75ZM19.249 10L16.874 18.75C15.839 18.75 14.999 19.5888 14.999 20.625C14.999 21.6612 15.839 22.5 16.874 22.5C17.909 22.5 18.749 21.6612 18.749 20.625C18.749 19.59 17.909 18.75 16.874 18.75L19.249 10Z' />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
CardTemplate.propTypes = {
  dataItem: PropTypes.object.isRequired,
}

export { CardTemplate }
