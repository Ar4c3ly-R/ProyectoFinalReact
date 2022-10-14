import { useParams } from 'react-router-dom'

// components
import Cardpelis from '../components/Cardpelis'

// hooks
import useGetData from '../hooks/useGetData'

export const Searchpelis = () => {
  const { code } = useParams()
  const { pelis, loading } = useGetData(`https://api.tvmaze.com/search/shows?q=${code}`)

  console.log(pelis)

  return (
    <section className='container py-4'>
      <div className='row gx-5 gy-5'>
        {
          loading
            ? <p className='text-center'> Cargando... </p>
            : pelis.map((peli, index) => (
              <aside key={index} className='col-md-3 col-lg-2'>
                <Cardpelis {...peli} />
              </aside>
            ))
        }
      </div>
    </section>
  )
}

export default Searchpelis
