var restify = require('restify');

// Configure globals
// GLOBAL.appConfig = require("./config/config");

var server = restify.createServer();
server.use(restify.bodyParser());


// Routes
server.get(/\/images|css|fonts|js|twitter\/?.*/, restify.serveStatic({
  directory: './public'
}));
server.get("/", restify.serveStatic({
  directory: './public',
  default: "index.html"
}));

// require('./routes/users')(server);

server.listen(process.env.PORT || 5000, function() {
  console.log('%s listening at %s', server.name, server.url);
});