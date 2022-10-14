// component
import Card from './Card'

// hooks
import useGetData from '../hooks/useGetData'

const Peliculas = () => {
  const { pelis, loading } = useGetData('https://api.tvmaze.com/shows?page=0')
  console.log(pelis)

  return (
    <section className='container py-4'>

      <div className='row gx-5 gy-5'>
        {
          loading
            ? <p className='text-center'> Cargando... </p>
            : pelis.map((peli, index) => (
              <aside key={index} className='col-md-3 col-lg-2'>
                <Card {...peli} />
              </aside>
            ))
    }
      </div>
    </section>
  )
}

export default Peliculas

//  if (code !== undefined) {
//   url = `${urlBase}search/shows?q=${code}`
//   useGetData(url)
// } else {
