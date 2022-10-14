const Cardpeli = (pelicula = {}) => {
  return (
    <>
      <section>
        <div className='card mb-3'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={pelicula.image.original} className='img-fluid rounded-start' alt={pelicula.name} />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h2 className='card-title'>{pelicula.name}</h2>
                {pelicula.summary}
                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Cardpeli
