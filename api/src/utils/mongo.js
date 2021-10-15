const mongoose = require('mongoose')
const { mongoHost, mongoPort, mongoDatabase } = require('../../config/index');

const createMongoConnection = async () => {
  const mongo = await mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDatabase}`)
  console.log(`✅ Connected to MongoDB on ${mongo.connection.host}...`);
}

module.exports = {
  createMongoConnection
}