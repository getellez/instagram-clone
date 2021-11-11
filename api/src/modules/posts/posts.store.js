const createPost = async (PostModel, data) => {
  const post = await PostModel.create(data)
  return post.toJSON()
}

const getPosts = async (PostModel, condition) => {
  const post = await PostModel.findAll(condition)
  return post
}

module.exports = {
  createPost,
  getPosts
}
