/* GET comments page. */
exports.comment_get = [
  function(req, res, next) {
  res.render('comment_get', { title: 'Comments page' });
  }
];