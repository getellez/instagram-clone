const userRoutes = require('../modules/user/users.routes')
const postRoutes = require('../modules/posts/posts.routes')

const handleRoutes = (app) => {
  app.use('/api/users', userRoutes)
  app.use('/api/posts', postRoutes)
}

module.exports = handleRoutes;
