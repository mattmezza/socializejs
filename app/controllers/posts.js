// call the packages we need
var config  = require('../../config'); // get our config file
var neo4j   = require('node-neo4j');
db          = new neo4j(config.database);

exports.post = function(req, res, next) {
  var user = "m.merola1";
  var post = req.body;
  console.log(post);
  db.insertNode(post,function(err, node){
      if(err) {
        res.json({result:"KO"})
      } else {
        res.json({result:"OK", id:node._id})
      }
  });
}

exports.delete = function(req, res, next) {
  var user = "m.merola1";
  var post_id = req.params.id_post;
  db.deleteNode(post_id, function(err, node){
    if(err) {
      res.json({result:"KO",msg:err})
    }else{
      if(node === true){
        res.json({result:"OK"})
      } else {
        res.json({result:"KO",msg:"node not deleted because not found or because of existing relationships"})
      }
    }
});
}

exports.likes = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.unlike = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.like = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.update = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}
