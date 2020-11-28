import { useState, useEffect} from 'react'

const useCity = url => {

  const [city, setCity] = useState([]);

  useEffect(() => {
   fetch(url)
   .then(response => response.json())
   .then(data => setCity(data))
  }, [url])

  return city;
}

export default useCity;