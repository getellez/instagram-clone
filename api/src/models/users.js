const { Schema, model } = require('mongoose');

const userSchema = Schema({
  username: String,
  fullName: String,
  birthdate: Date,
  phone: String
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

const User = model('User', userSchema)

module.exports = User