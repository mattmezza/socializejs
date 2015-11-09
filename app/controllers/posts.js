
exports.createPost = function(req, res, next) {
  var user = "m.merola1";
  var post = req.body;
  console.log(post);

  var triple = { subject: user, predicate: "writes", object: "c" };
  db.put(triple, function(err) {
    if(err)
      res.json({status: "KO"})
    else
      res.json({status: "OK"})
  })
}

exports.deletePost = function(req, res, next) {
  var user = "m.merola1";
  var post_id = req.params.post_id;
  var triple = { subject: user, predicate: "writes", object: post_id };
  db.del(triple, function(err) {
    if(err)
      res.json({status: "KO"})
    else
      res.json({status: "OK"})
  });
}
