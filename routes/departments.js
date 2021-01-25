var express = require('express');
var router = express.Router();

// Require user controller.
var departmentController = require('../controllers/departmentController');

// when users visit /employee go to user controller
router.get('/department', departmentController.department_get);


module.exports = router;