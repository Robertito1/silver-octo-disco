var express = require('express');
var router = express.Router();

// Require user controller.
var categoryController = require('../controllers/categoryController');

// when users visit /employee go to user controller
router.get('/category', categoryController.category_get);


module.exports = router;