import { Link } from 'react-router-dom'

const Cardpelis = ({ show = {} }) => {
  return (
    <Link className='text-decoration-none text-body' to={`/pelicula/${show.name}`}>
      <div className='card'>
        <img src={(show.image !== null) ? show.image.medium : '../assets/Noimage.png'} className='card-img-top' alt={show.name} />
        <div className='card-body'>
          <h5 className='card-title'>{show.name}</h5>
        </div>
      </div>
    </Link>
  )
}

export default Cardpelis
