var express = require('express');
var router = express.Router();

const postController = require('../controllers/posts')

router.post('/', postController.createPost);

module.exports = router;
