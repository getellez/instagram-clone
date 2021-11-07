const PostModel = require('../../models/posts')
const postService = require('./posts.services')
const postStore = require('./posts.store')
const responseHandler = require('../../utils/responseHandler')

const createPost = async (req, res, next) => {
  try {
    const { description } = req.body
    const { file } = req.files
    const post = await postService.createPost(PostModel, file, description)
    responseHandler.success(req, res, 201, { filename: file.name, filePath: post.photoUrl })
  } catch (error) {
    next(error)
  }
}

const getPostsByUsername = async (req, res, next) => {
  try {
    const username = req.params.username
    const posts = await postService.getPost(PostModel, {username})
    res.status(200).send({ status: 'ok', code: 200, data: posts })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createPost,
  getPostsByUsername
}