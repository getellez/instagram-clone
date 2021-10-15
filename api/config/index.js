require('dotenv').config()

module.exports = {
  mongoHost: 'localhost' || process.env.MONGO_HOST,
  mongoPort: '27017' || process.env.MONGO_PORT,
  mongoDatabase: 'instagram-clone' || process.env.MONGO_DATABASE,

}