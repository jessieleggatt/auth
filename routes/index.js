
/*
 * GET home page.
 */

exports.index = function(req, res){
  var user = req.user;
  console.log(req);
  res.render('index.html', {u: user, title: 'index'});
};