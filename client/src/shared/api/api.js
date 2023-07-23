import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000'
})

// http.interceptors.request.use(
//   function (error) {
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

// http.interceptors.response.use(
//   (res) => {
//     // return res.data = { content: res.data }
//     console.log(res)
//     return res
//   },
//   function (error) {
//     const expectedErrors =
//           error.response &&
//           error.response.status >= 400 &&
//           error.response.status < 500

//     if (!expectedErrors) {
//       console.error('Something was wrong. Try it later')
//     }
//     return Promise.reject(error)
//   }
// )

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch
}

export const charactersService = {
  get: async () => {
    const res = await httpService.get('/characters')
    return res.data
  }
}

export const testLocalDataService = {
  get: async () => {
    const res = await httpService.get('/testLocalData')
    return res.data
  }
}
