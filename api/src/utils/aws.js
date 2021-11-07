const AWS = require('aws-sdk')
const config = require('../../config/index')

const uploadFileToS3Bucket = (file) => {
  const params = {
    Bucket: config.awsS3BucketName,
    Key: file.name,
    Body: file.data
  };
  return new Promise((resolve, reject) => {
    
    const s3 = new AWS.S3({
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretKey
    })

    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })

  })
}

module.exports = {
  uploadFileToS3Bucket
}