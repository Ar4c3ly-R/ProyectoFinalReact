import useGetData from '../hooks/useGetData'

export const Personajes = ({ id = {} }) => {
  console.log(id)
  const url = `https://api.tvmaze.com/shows/${id}/cast`
  console.log('este es el idpeli', url)
  const { pelis, loading } = useGetData(url)
  console.log(pelis, loading)

  return (
    <section>
      <h2 className='pb-3'>Personajes</h2>
      <div className='row gx-5 gy-3'>
        {pelis.map((peli, index) => (
          <aside key={index} className='col-md-2 '>
            <div className='card'>
              <img src={(peli.person.image !== null) ? peli.person.image.medium : '../assets/Noimage.png'} className='card-img-top' alt='' />
              <div className='card-body'>
                <h5 className='card-title'>{peli.person.name}</h5>
              </div>
            </div>
          </aside>
        ))}
      </div>
    </section>
  )
}

export default Personajes
