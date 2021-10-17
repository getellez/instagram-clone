const userRoutes = require('./users')
const postRoutes = require('./posts')

const handleRoutes = (app) => {
  app.use('/api/users', userRoutes)
  app.use('/api/posts', postRoutes)
}

module.exports = handleRoutes;
