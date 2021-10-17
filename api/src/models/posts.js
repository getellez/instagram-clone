const { Schema, model } = require('mongoose');

const postSchema = Schema({
  username: String,
  photoUrl: String,
  description: String,
  location: String
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

const Post = model('Post', postSchema)

module.exports = Post