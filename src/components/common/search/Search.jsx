import { Button } from '../../../templates/buttons/Button'
import { Input } from '../../../templates/inputs/Input'
import './search.scss'

const Search = () => {
  return (
    <>
      <div className='wrapper-search'>
        <div className='button-sections'>
          <Button>Поиск по номеру</Button>
          <Button>Поиск по марке</Button>
          <Button>Поиск по названию товара</Button>
        </div>
        <div className='input-sections'>
          <Input className='base-style' type='text' />
          <Button>Искать</Button>
        </div>
      </div>
    </>
  )
}

export { Search }
