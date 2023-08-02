import axios from 'axios'
import { API_URL } from '../config'

const BASE_URL = '/characters'

const getCharacters = async () => {
  try {
    const res = await axios.get(`${API_URL}${BASE_URL}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const getCharactersById = async (id) => {
  // const res = await fetch(`${API_URL}${BASE_URL}/${id}`)
  // return await res.json()
}

export const charactersAPI = {
  getCharacters,
  getCharactersById
}
