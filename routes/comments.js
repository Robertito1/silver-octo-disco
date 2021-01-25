var express = require('express');
var router = express.Router();

// Require user controller.
var commentController = require('../controllers/commentController');

// when users visit /employee go to user controller
router.get('/comment', commentController.comment_get);


module.exports = router;