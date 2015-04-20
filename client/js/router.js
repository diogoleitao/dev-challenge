var Router = require('ampersand-router');
var HomePage = require('./pages/home');

var WebAppRouter = Router.extend({
	routes: {
		'': 'home',
		'api/ninjas': 'getNinjas',
		'api/ninjas/{id}': 'getNinja',
		'api/ninjas/{id}': 'updateNinja',
		'api/ninjas': 'createNinja',
		'(*path)': 'catchAll'
	},

	// ------- ROUTE HANDLERS ---------
	home: function() {
		this.trigger('page', new HomePage());
	},

	getNinjas: function() {
		console.log(1);
	},

	getNinja: function(id) {
		console.log(2);
	},

	updateNinja: function(id) {
		console.log(3);
	},

	createNinja: function() {
		console.log(4);
	},

	catchAll: function() {
		this.redirectTo('/notFound');
	}
});

module.exports = WebAppRouter;
