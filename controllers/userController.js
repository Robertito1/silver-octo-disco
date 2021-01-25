/* GET user page. */
exports.user_get = [
  function(req, res, next) {
  res.render('user_get', { title: 'Users page' });
}
];
