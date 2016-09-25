require('coffee-script').register();

var restify = require('restify'),
    fs = require('fs');

// Configure globals
GLOBAL.appConfig = require("./config/config");

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

server.post("/contact", function (req, res) {
  fs.appendFile("contact.log", new Date() + ": " + req.body + "\n", function () {
    res.json({})
  })
});

// require('./routes/users')(server);

server.listen(process.env.PORT || 8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});