const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/mysql')

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    field: 'user_id'
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'full_name'
  },
  profilePictureUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'profile_picture_url'
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true,
    field: 'birth_date'
  }
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

module.exports = User
