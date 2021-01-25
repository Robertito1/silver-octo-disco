var express = require('express');
var router = express.Router();

// Require user controller.
var userController = require('../controllers/userController');

// when users visit /user go to user controller
router.get('/user', userController.user_get);
// router.post('/user', userController.user_post);
// router.update('/user', userController.user_update);
// router.delete('/user', userController.user_delete);


module.exports = router;

