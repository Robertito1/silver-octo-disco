/* GET department page. */
exports.department_get = [
  function(req, res, next) {
  res.render('department_get', { title: 'Department page' });
  }
];