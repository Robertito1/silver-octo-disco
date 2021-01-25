/* GET categories page. */
exports.category_get = [
  function(req, res, next) {
  res.render('category_get', { title: 'Categories page' });
  }
];