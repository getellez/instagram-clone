const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const fileUpload = require('express-fileupload')
const handleRoutes = require('./src/routes/index')

const app = express()

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(fileUpload())

// Routes
handleRoutes(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)

  if (err.statusCode === 404) {
    res.status(404).send({
      status: 'Not Found',
      error: err
    })
  } else {
    res.status(err.statusCode).send({
      status: 'Unexpected Error',
      error: err
    })
  }
})

module.exports = app
