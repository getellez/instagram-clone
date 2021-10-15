const userRoutes = require('./users')

const handleRoutes = (app) => {
  app.use('/api/users', userRoutes)
}

module.exports = handleRoutes;
