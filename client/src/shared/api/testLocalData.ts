import axios from 'axios'
import { API_URL } from '../config'

const BASE_URL = '/testLocalData'

const getTestLocalData = async (): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}${BASE_URL}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const LocalDataAPI = {
  getTestLocalData
}
