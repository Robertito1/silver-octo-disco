/* GET post page. */
exports.post_get = [
  function(req, res, next) {
  res.render('post_get', { title: 'Posts page' });
  }
];