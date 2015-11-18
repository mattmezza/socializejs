// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var config  = require('./config'); // get our config file
var neo4j   = require('node-neo4j');
var db      = new neo4j(config.database);

var restify = require('restify')
var fs      = require('fs')

var controllers       = {}
var controllers_path  = process.cwd() + '/app/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();
server
    .use(restify.fullResponse())
    .use(restify.bodyParser())

server.del("/posts/:id_post/comments/:id_comment/replies/:id_reply/like", controllers.replies.unlike)
server.put("/posts/:id_post/comments/:id_comment/replies/:id_reply/like", controllers.replies.like)
server.get("/posts/:id_post/comments/:id_comment/replies/:id_reply/likes", controllers.replies.likes)
server.put("/posts/:id_post/comments/:id_comment/replies/:id_reply", controllers.replies.update)
server.del("/posts/:id_post/comments/:id_comment/replies/:id_reply", controllers.replies.delete)
server.post("/posts/:id_post/comments/:id_comment/reply", controllers.replies.reply)

server.del("/posts/:id_post/comments/:id_comment/like", controllers.comments.unlike)
server.put("/posts/:id_post/comments/:id_comment/like", controllers.comments.like)
server.get("/posts/:id_post/comments/:id_comment/likes", controllers.comments.like)
server.get("/posts/:id_post/comments/most_liked/:max", controllers.comments.mostLiked)
server.get("/posts/:id_post/comments/:per_page/:page", controllers.comments.comments)
server.put("/posts/:id_post/comments/:id_comment", controllers.comments.update)
server.del("/posts/:id_post/comments/:id_comment", controllers.comments.delete)
server.post("/posts/:id_post/comments/new", controllers.comments.comment)

server.get("/posts/:id_post/likes", controllers.posts.likes)
server.del("/posts/:id_post/like", controllers.posts.unlike)
server.put("/posts/:id_post/like", controllers.posts.like)
server.del("/posts/:id_post", controllers.posts.delete)
server.put("/posts/:id_post", controllers.posts.update)
server.post("/posts/new", controllers.posts.post)

server.del("/follow/:id_profile", controllers.follow.unfollow)
server.put("/follow/:id_profile", controllers.follow.follow)
server.get("/following", controllers.follow.following)

server.get("/feeds/friends/:per_page/:page", controllers.feeds.friendsFeeds)
server.get("/feeds/following/:per_page/:page", controllers.feeds.followingFeeds)
server.get("/feeds/:per_page/:page", controllers.feeds.feeds)

server.post("/account/login", controllers.account.login)
server.post("/account/logout", controllers.account.logout)
server.post("/account/reset_password/:token", controllers.account.resetPassword)
server.post("/account/reset_password", controllers.account.resetPasswordGenerateToken)
server.put("/account", controllers.account.updateAccount)
server.del("/account", controllers.account.delete)

server.get("/friends", controllers.friends.friends)
server.del("/friends/:id_friend", controllers.friends.unfriend)
server.put("/friends/:id_friend", controllers.friends.friend)

server.get("/users/:id_user/following", controllers.users.following)
server.get("/users/:id_user/followers", controllers.users.followers)
server.get("/users/:id_user/friends", controllers.users.friends)




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
