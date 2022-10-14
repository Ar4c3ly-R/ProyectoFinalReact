import { useState, useEffect } from 'react'

export const useGetData = (url) => {
  const [pelis, setPelis] = useState([] || {})
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    try {
      console.log('urls', url)
      const req = await window.fetch(url)
      const res = await req.json()
      setPelis(res)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [] || {})

  return (
    { pelis, loading }
  )
}

export default useGetData
