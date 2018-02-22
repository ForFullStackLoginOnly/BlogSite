import axios from 'axios'
const baseUrl = '/api/blogs'

let config = null

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const setToken = (newToken) => {
  const token = `bearer ${newToken}`
  config = {
    headers: { 'Authorization': token, 'Content-Type': 'application/json' }
  }
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, changedObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, changedObject, config)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, setToken, create, getOne, update, remove }
