import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = url => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(url)
        setResponse(res.data || res)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])
  return [response, error, isLoading]
}

export default useFetch

