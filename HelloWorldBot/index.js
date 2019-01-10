const restify = require('restify');
const builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(3978, function() {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector();

var bot = new builder.UniversalBot(connector, function(session) {
    session.send("Hello world!");
});

// Listen for messages from users
server.post('/api/messages', connector.listen());