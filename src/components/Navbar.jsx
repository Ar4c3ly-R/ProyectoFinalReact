import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const Navbar = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e) => {
    navigate(`/search/${input}`)
  }
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          <Link className='text-decoration-none text-body' to='/'>
            <a className='navbar-brand'> <img src='/src/assets/tvLogo.png' alt='Logo' width={150} height={60} className='d-inline-block align-text-top' /></a>
          </Link>
          <form className='d-flex' role='search' onSubmit={onSubmit}>
            <input className='input form-control me-2' type='search' placeholder='Search' aria-label='Search' defaultValue={input} onChange={(e) => setInput(e.target.value)} />
            <button className='btn btn-outline-success' type='submit'>Buscar</button>
          </form>
        </div>
      </nav>
      <nav className='navbar bg-light'>
        <div className='container-fluid'>
          <span className='navbar-text'>
            Realiza tu búsqueda
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
