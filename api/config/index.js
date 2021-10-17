require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3005,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsS3BucketName: process.env.AWS_S3_BUCKET_NAME,
  mongoHost: 'localhost' || process.env.MONGO_HOST,
  mongoPort: '27017' || process.env.MONGO_PORT,
  mongoDatabase: 'instagram-clone' || process.env.MONGO_DATABASE,

}