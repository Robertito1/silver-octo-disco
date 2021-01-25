/* GET employee page. */
exports.employee_get = [
  function(req, res, next) {
  res.render('employee_get', { title: 'Employees page' });
  }
];