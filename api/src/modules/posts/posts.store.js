const createPost = async (PostModel, data) => {
  const post = await PostModel.create(data)
  return post
}

const getPosts = async (PostModel, condition) => {
  const post = await PostModel.find(condition)
  return post
}

module.exports = {
  createPost,
  getPosts
}
