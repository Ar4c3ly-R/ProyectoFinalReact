import useGetData from '../hooks/useGetData'

// import Cardtemporadas from './CardTemporadas'

export const Temporadas = ({ id = {} }) => {
  console.log(id)
  const { pelis, loading } = useGetData(`https://api.tvmaze.com/shows/${id}/seasons`)
  console.log(pelis, loading)

  return (
    <section>
      <h2 className='pt-5 pb-4'>Temporadas</h2>
      <div className='row gx-5 gy-5'>
        {pelis.map((peli, index) => (
          <aside key={index} className='col-md-4 '>
            <div className='card' style={{ width: '18rem' }}>
              <img src={(peli.image !== null) ? peli.image.medium : '../assets/Noimage.png'} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title text-center'>Temporada {peli.number}</h5>
                <p className='card-text'>Summary: {peli.sumary}</p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Episode: {peli.episodeOrder}</li>
                <li className='list-group-item'>Premiere date: {peli.premiereDate}</li>
                <li className='list-group-item'>End date: {peli.endDate}</li>
              </ul>
            </div>
          </aside>
        ))}
      </div>
    </section>
  )
}
export default Temporadas
