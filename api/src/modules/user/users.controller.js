const User = require('../../models/users')

const createUser = async (req, res, next) => {
  try {
    const { data } = req.body
    await User.create(data)

    res.status(201).send({
      status: 'ok',
      code: 201,
      data
    })
  } catch (error) {
    next(error)
  }
}

const getUser = async (req, res, next) => {
  try {
    const { username } = req.params
    const users = await User.findOne({ username })
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
  createUser,
  getUser
}