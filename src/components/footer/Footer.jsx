import { Container } from '../../templates/container/container'
import { FaInstagram, FaFacebook, FaYoutube, FaVk } from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
  return (
    <>
      <div className='footer__container'>
        <Container>
          <div className='footer__content'>
            <div className='mailing-list'>
              Подпишитесь на нашу рассылку и узнавайте о акция быстрее
            </div>
            <div className='block-info'>
              Информация О компании Контакты Акции Магазины
            </div>
            <div className='block-shops'>
              Интернет-магазин Доставка и самовывоз Оплата Возврат-обмен Новости
            </div>
            <div className='block-web'>
              <FaInstagram />
              <FaVk />
              <FaFacebook />
              <FaYoutube />
            </div>
          </div>
          <div className='sub-footer'>
            <div className='ofert'>Договор оферты</div>
            <div className='politica'>
              Политика обработки персональных данных
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
export { Footer }
