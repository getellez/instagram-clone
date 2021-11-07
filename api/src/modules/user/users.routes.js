const express = require('express')
const router = express.Router()
const userController = require('./users.controller')

/* GET users listing. */
router.get('/:username', userController.getUser)
router.post('/', userController.createUser)

module.exports = router
