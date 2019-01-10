const LUIS_URL = enter luis url here;

const restify = require('restify');
const builder = require('botbuilder');

this.builder = builder;
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

var recognizer = new builder.LuisRecognizer(LUIS_URL);
bot.recognizer(recognizer);

bot.dialog('OrderStatusDialog', (session, args) => {
  var orderNumber = this.builder.EntityRecognizer.findEntity(args.intent.entities, 'builtin.number').entity;
  session.send(`Looking up status for order: ${orderNumber}`);
}
).triggerAction({
matches: 'OrderStatus'
});

bot.dialog('SetupMeetingDialog',
(session, args) => {
  var date = this.builder.EntityRecognizer.findEntity(args.intent.entities, 'builtin.datetimeV2.date').entity;
  var person = this.builder.EntityRecognizer.findEntity(args.intent.entities, 'builtin.personName').entity;
  session.send(`Setting up a meeting with ${person} on ${date}`);
}).triggerAction({
matches: 'SetupMeeting'
});

// Listen for messages from users
server.post('/api/messages', connector.listen());