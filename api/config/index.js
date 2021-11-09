require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3005,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsS3BucketName: process.env.AWS_S3_BUCKET_NAME,
  dbHost: '192.168.0.103' || process.env.DB_HOST,
  dbName: 'instagram-clone-db' || process.env.DB_DATABASE,
  dbUser: 'instagram-user' || process.env.DB_USER,
  dbPassword: 'instagram-s3cr3t' || process.env.DB_PASSWORD

}
