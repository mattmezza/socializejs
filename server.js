// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var config = require('./config'); // get our config file
var level = require("level-browserify");
var levelgraph = require("levelgraph");

// just use this in the browser with the provided bundle
var db = levelgraph(level(config.database));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/add', function(req, res) {
  var triple = { subject: "Matteo", predicate: "ama", object: "Enza" };
  db.put(triple, function(err) {
    // do something after the triple is inserted
  });
  res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/get', function(req, res) {
  db.get({ subject: "Matteo" }, function(err, list) {
    console.log(list);
    res.json(list);
  });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
