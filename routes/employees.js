var express = require('express');
var router = express.Router();

// Require user controller.
var employeeController = require('../controllers/employeeController');

// when users visit /employee go to user controller
router.get('/employee', employeeController.employee_get);


module.exports = router;