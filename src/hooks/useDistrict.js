import { useState, useEffect} from 'react'

const useDistrict = url => {

  const [district, setDistrict] = useState([]);

  useEffect(() => {
   fetch(url)
   .then(response => response.json())
   .then(data => setDistrict(data))
  }, [url])

  return district;
}

export default useDistrict;