const { Sequelize } = require('sequelize')
const { dbHost, dbName, dbUser, dbPassword } = require('../../config')

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  logging: false,
  define: {
    freezeTableName: true
  }
})

module.exports = {
  sequelize
}
