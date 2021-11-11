import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const getUser = async (userId, params) => {
  params = params || {}
  const res = await api.get(`/users/${userId}`, params)
  return res.data
}