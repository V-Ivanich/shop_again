import './goodsInfo.scss'

const testArray = {
  country: 'Страна производитель',
  numberPlaces: 'Количество мест, шт:',
  power: 'Мощность, л.с.',
  fuel: 'Тип двигателя',
  year: 'Год выпуска',
}

export const GoodsInfo = ({ propertyList }) => {
  const keyArray = Object.keys(testArray)
  const keyList = Object.keys(propertyList)
  const arrayList = keyArray.map((item) => {
    if (keyList.includes(item)) {
      return (
        <div key={item} className='item-container'>
          <span>{testArray[`${item}`]}</span>
          <span>{propertyList[`${item}`]}</span>
        </div>
      )
    }
  })

  return <>{arrayList}</>
}
