const express = require('express')
const router = express.Router()

const postController = require('./posts.controller')

router.post('/', postController.createPost)
router.get('/:username', postController.getPostsByUsername)

module.exports = router
