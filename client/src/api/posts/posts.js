import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const getPostsByUsername = async (userId, params) => {
  params = params || {}
  const res = await api.get(`/posts/${userId}`, params)
  return res.data
}

export const createPost = async (payload, params) => {
  params = params || {}
  const res = await api.post('/posts', payload, params)
  return res.data
}
