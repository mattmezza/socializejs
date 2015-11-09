// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var level = require("level-browserify");
var levelgraph = require("levelgraph");
// just use this in the browser with the provided bundle
var config = require('./config'); // get our config file
var db = levelgraph(level(config.database));
var restify = require('restify')
    , fs = require('fs')

var controllers = {}
    , controllers_path = process.cwd() + '/app/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();
server
    .use(restify.fullResponse())
    .use(restify.bodyParser())

server.get("/posts/new", controllers.posts.createPost)
server.del("/posts/:post_id", controllers.posts.deletePost)

var port = process.env.PORT || 8080;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})

if (process.env.environment == 'production')
    process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
    })
