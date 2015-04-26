/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('Ticket', function (/* args */) {
  return Ticket.find();
});

Meteor.publish('Counter', function (/* args */) {
  return Counter.find();
});

Meteor.publish('Queue', function (/* args */) {
  return Queue.find();
});

Meteor.publish('App', function (/* args */) {
  return App.find();
});

Meteor.publish('User', function (/* args */) {
  return User.find();
});

Meteor.publish('FlashMessage', function (/* args */) {
  return FlashMessage.find();
});

Meteor.publish('Video', function (/* args */) {
  return Video.find();
});