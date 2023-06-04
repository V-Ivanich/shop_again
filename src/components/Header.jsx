import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>
    </>
  )
}

export { Header }
