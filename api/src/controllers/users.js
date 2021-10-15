const User = require('../models/users')

const createPost = (req, res, next) => {}

const getPost = (req, res, next) => {}

const getUser = async (req, res, next) => {
  try {
    const { username } = req.params
    const users = await User.find({ username })
    return res.send({
      code: 200,
      status: 'ok',
      data: users
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createPost,
  getPost,
  getUser
}