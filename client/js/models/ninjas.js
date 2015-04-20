var AmpCollection = require('ampersand-rest-collection');
var Ninja = require('./ninja');

module.exports = AmpCollection.extend({
	model: Ninja,
	url: '/api/ninjas'
});
