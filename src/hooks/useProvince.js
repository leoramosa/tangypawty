import { useState, useEffect} from 'react'

const useProvince = url => {

  const [province, setProvince] = useState([]);

  useEffect(() => {
   fetch(url)
   .then(response => response.json())
   .then(data => setProvince(data))
  }, [url])

  return province;
}

export default useProvince;