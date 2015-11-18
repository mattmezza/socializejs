// call the packages we need
var config  = require('../../config'); // get our config file
var neo4j   = require('node-neo4j');
db          = new neo4j(config.database);

exports.login = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.logout = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.resetPassword = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.resetPasswordGenerateToken = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.updateAccount = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.delete = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}
