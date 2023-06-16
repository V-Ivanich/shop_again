import { Button } from '../../../templates/buttons/Button'
import x6moto from '../../../image/vezdehod.png'
import x3turbo from '../../../image/kvadrocikl.png'
import './baner.scss'

const Baner = () => {
  return (
    <>
      <div className='wrapper-baner'>
        <div className='sections-images'>
          <div className='box-img'>
            <img src={x6moto} alt='no' />
          </div>
          <div className='box-img'>
            <img src={x3turbo} alt='no' />
          </div>
        </div>
        <div className='center-titles'>
          <h3>СКИДКИ</h3>
          <p>на все запчасти</p>
          <p>до 70%</p>
        </div>
        <div className='big-button-veiw'>
          <Button className='big-btn'>посмотреть все</Button>
        </div>
      </div>
    </>
  )
}

export { Baner }
