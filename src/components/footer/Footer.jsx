import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../templates/container/container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
// import { Input } from '../../templates/inputs/Input'
import { FaInstagram, FaFacebook, FaYoutube, FaVk } from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
  return (
    <>
      <div className='footer__container'>
        <Container>
          <div className='footer__content'>
            <div className='mailing-list'>
              <div className='mailing-list__title-block'>
                <p>Подпишитесь на нашу рассылку</p>
                <p>и узнавайте о акция быстрее</p>
              </div>
              <div className='mailing-list__input-btn'>
                {/* <Input type='email' placeholder='Введите ваш e-mail:' /> */}
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label='Введите e-mail:'
                  variant='outlined'
                  size='small'
                  color='success'
                />
                <Button
                  variant='outlined'
                  size='small'
                  endIcon={<SendIcon />}
                  sx={{
                    padding: '0px 2rem',
                    color: 'var(--colors-buttons)',
                    border: '1px solid var(--colors-buttons)',
                  }}>
                  ОТПРАВИТЬ
                </Button>
              </div>
            </div>
            <div className='footer__content__center'>
              <div className='block-info'>
                <p>Информация</p>
                <ul>
                  <li>
                    <Link to='/about'>О компании</Link>
                  </li>
                  <li>
                    <Link to='/about'>Контакты</Link>
                  </li>
                  <li>
                    <Link to='/about'>Акции</Link>
                  </li>
                  <li>
                    <Link to='/about'>Магазины</Link>
                  </li>
                </ul>
              </div>
              <div className='block-shops'>
                <p>Интернет-магазин</p>
                <ul>
                  <li>
                    <Link to='/about'>Доставка и самовывоз</Link>
                  </li>
                  <li>
                    <Link to='/about'>Оплата</Link>
                  </li>
                  <li>
                    <Link to='/about'>Возврат-обмен</Link>
                  </li>
                  <li>
                    <Link to='/about'>Новости</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='block-web'>
              <Link to='/about'>
                <FaInstagram size={30} />
              </Link>
              <Link to='/about'>
                <FaVk size={30} />
              </Link>
              <Link to='/about'>
                <FaFacebook size={30} />
              </Link>
              <Link to='/about'>
                <FaYoutube size={30} />
              </Link>
            </div>
            <div className='sub-footer'>
              <Link className='sub-footer__left-content' to='/about'>
                Договор оферты
              </Link>
              <Link className='sub-footer__right-content' to='/about'>
                Политика обработки персональных данных
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
export { Footer }
