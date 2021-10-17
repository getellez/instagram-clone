var express = require('express');
var router = express.Router();

const postController = require('../controllers/posts')

router.post('/', postController.createPost);
router.get('/:username', postController.getPostsByUsername);

module.exports = router;
