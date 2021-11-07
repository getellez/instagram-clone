var express = require('express');
var router = express.Router();

const postController = require('./posts.controller')

router.post('/', postController.createPost);
router.get('/:username', postController.getPostsByUsername);

module.exports = router;
