import { useParams } from 'react-router-dom'

import useGetData from '../hooks/useGetData'

import Cardpeli from '../components/Cardpeli'
import Personajes from '../components/Personajes'
import Temporadas from '../components/Temporadas'

export const Pelicula = () => {
  const { name } = useParams()
  const { pelis, loading } = useGetData(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)

  console.log(pelis)
  console.log(pelis.id)

  return (
    <section className='container py-4'>
      <div className='row gx-5 gy-5 pb-4'>
        {
          loading
            ? <p className='text-center'> Cargando... </p>
            : <aside className='col-md-8'>
              <Cardpeli {...pelis} />
          </aside>
        }
      </div>
      {
        loading
          ? <p className='text-center'> Cargando... </p>
          : <div className='pt-5'> <Temporadas {...pelis} /> </div>
      }
      {
        loading
          ? <p className='text-center'> Cargando... </p>
          : <div className='pt-5'> <Personajes {...pelis} /> </div>
      }

    </section>
  )
}

export default Pelicula
