import cat from '../../../image/mona-loading-default.gif'

const Spinner = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 0' }}>
      <img src={cat} alt='no' width='30px' />
    </div>
  )
}

export { Spinner }
