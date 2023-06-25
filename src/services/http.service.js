import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'

axios.interceptors.response.use(
  (res) => res,
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500

    if (!expectedErrors) {
      console.log('Unexpected error')
    }
    return Promise.reject(error)
  },
)

const HttpService = {
  get: axios.get,
  delete: axios.delete,
  put: axios.put,
}

// const HttpService = (setDataCatalog, dataCatalog) => {
//   const params = useParams().catalog
//   console.log(params)

//   useEffect(() => {
//     const data = axios.get(`http://localhost:3001/${params}`)
//     setDataCatalog(data)
//     console.log(data)
//   }, [])

// }

export { HttpService }
