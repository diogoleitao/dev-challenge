var Hapi = require('hapi');
var config = require('./config');
var internals = {};

console.log('### Starting Challenge Server ###');

var server = new Hapi.Server();
server.connection(config.hapi);

module.exports.hapi = server;

// Set clientconfig cookie
/////////////////////////////////////////////////////////////////////////////////
// This will allow for our client config properties to be set up in our config.js
// and then sent to the client 
/////////////////////////////////////////////////////////////////////////////////
internals.configStateConfig = {
  encoding: 'none',
  ttl: 1000 * 60 * 15,
  isSecure: config.isSecure
};

server.state('config', internals.configStateConfig);
internals.clientConfig = JSON.stringify(config.client);
server.ext('onPreResponse', function (request, reply) {
  if (!request.state.config && !request.response.isBoom) {
    var response = request.response;
    return reply(response.state('config', encodeURIComponent(internals.clientConfig)));
  }

  return reply.continue();
});

// Require and register the moonboots_hapi plugin
// So that we may serve all the client content
server.register({ register: require('moonboots_hapi'), options: require('./moonbootsConfig') }, function (err) {
  if (err) {
    throw err;
  }
  // If everything loaded correctly, start the server:
  server.start(function (err) {
    if (err) {
      throw err;
    }
    console.log('Your app is running at: http://localhost:' + config.hapi.port + " Awesome \\o/\n");
    console.log('//////////////////////////////////////////////////////////////////');
    console.log('//\tWelcome young ninja apprentice\t\t\t\t//');
    console.log('//\tReady for a challenge? Do you have what it takes?\t//');
    console.log('//\tWe really hope so. Good luck!\t\t\t\t//');
    console.log('//////////////////////////////////////////////////////////////////');
    console.log('//Feel free to say hi to one of our ninja masters at:');
    console.log('//require(\'./config\').ninjaInfo@sinfo.org');
  });
});