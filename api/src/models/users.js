const { Schema, model } = require('mongoose');

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  fullName: String,
  birthdate: Date
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

const User = model('User', userSchema)

module.exports = User