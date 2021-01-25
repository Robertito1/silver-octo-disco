var express = require('express');
var router = express.Router();

// Require post controller.
var postController = require('../controllers/postController');

// when users visit /post go to post controller
router.get('/post', postController.post_get);
// router.post('/post', postController.post_post);
// router.update('/post', postController.post_update);
// router.delete('/post', postController.post_delete);


module.exports = router;