import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Homepage } from './pages/homepage/Homepage'
import { Aboutpage } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
// import { Footer } from './components/footer/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='posts' element={<Blogpage />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
