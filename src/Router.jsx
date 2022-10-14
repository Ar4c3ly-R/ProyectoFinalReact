import { BrowserRouter, Routes, Route } from 'react-router-dom'

// componentes
import Navbar from './components/Navbar'
import App from './pages/App'
import Pelicula from './pages/Pelicula'
import Searchpelis from './pages/Searchpelis'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/search/:code' element={<Searchpelis />} />
        <Route path='/pelicula/:name' element={<Pelicula />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
