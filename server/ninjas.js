var server = require('../index').hapi;

//Our ninja DB
var ninjas = {};

server.route({
  method: 'GET',
  path: '/api/ninjas',
  config: {
    tags: ['api', 'ninjas'],
    description: 'Gets all the ninjas',
    handler: function(request, reply){
      /*
        TO DO
      */
    }
  }
});

server.route({
  method: 'GET',
  path: '/api/ninjas/{id}',
  config: {
    tags: ['api', 'ninjas'],
    description: 'Gets a ninja',
    handler: function(request, reply){
      /*
        TO DO
      */
    }
  }
});

server.route({
  method: ['PUT', 'PATCH'],
  path: '/api/ninjas/{id}',
  config: {
    tags: ['api', 'ninjas'],
    description: 'Updates a ninja',
    handler: function(request, reply){
      /*
        TO DO
      */
    }
  }
});

server.route({
  method: 'POST',
  path: '/api/ninjas',
  config: {
    tags: ['api', 'ninjas'],
    description: 'Creates a new ninja',
    handler: function(request, reply){
      /*
        TO DO
      */
    }
  }
});