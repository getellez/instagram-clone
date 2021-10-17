const Post = require('../models/posts')
const config = require('../../config/index')
const { uploadFileToS3Bucket } = require('../utils/aws')

const createPost = async (req, res, next) => {
  try {

    const { description } = req.body
    const { file } = req.files
    
    const params = {
      Bucket: config.awsS3BucketName,
      Key: file.name,
      Body: file.data
    };

    const result = await uploadFileToS3Bucket(params)
    const post = await Post.create({
      username: 'germantellezv',
      photoUrl: result.Location,
      description: description
    })
    console.log(post);

    res.status(201).send({
      status: 'ok',
      code: 201,
      data: {
        filename: file.name,
        filePath: post.photoUrl
      }
    })

  } catch (error) {
    next(error)
  }
}

const getPostsByUsername = async (req, res, next) => {
  const username = req.params.username
  const posts = await Post.find({username})

  res.status(200).send({
    status: 'ok',
    code: 200,
    data: posts
  })
}

module.exports = {
  createPost,
  getPostsByUsername
}