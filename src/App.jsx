import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Homepage } from './pages/homepage/Homepage'
import { Aboutpage } from './pages/Aboutpage'
import { Catalog } from './pages/catalog/Catalog'
import { Shops } from './pages/shops/Shops'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path=':catalog' element={<Catalog />} />
          <Route path='shops' element={<Shops />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
