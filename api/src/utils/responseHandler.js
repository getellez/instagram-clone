module.exports = {
  success: (req, res, statusCode, data = null) => {
    res.status(statusCode).json({
      statusCode,
      data
    })
  },
  error: (req, res, statusCode, message = null) => {
    res.status(statusCode).json({
      statusCode,
      message
    })
  }
}