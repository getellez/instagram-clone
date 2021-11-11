const { uploadFileToS3Bucket } = require('../../utils/aws')
const postStore = require('./posts.store')

const createPost = async (PostModel, file, description) => {
  const uploadedFile = await uploadFileToS3Bucket(file)
  const data = {
    userId: '462b4358-4f93-48a4-b942-4e0d550b2526',
    imageUrl: uploadedFile.Location,
    description: description
  }
  const post = await postStore.createPost(PostModel, data)
  return post
}

const getPost = async (PostModel, condition) => {
  const post = await postStore.getPosts(PostModel, condition)
  return post
}

module.exports = {
  createPost,
  getPost
}
