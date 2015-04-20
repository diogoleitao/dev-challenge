/*global app*/
var AmpModel = require('ampersand-model');

module.exports = AmpModel.extend({
	props: {
		codename: 'string',
		clan: 'string',
		category: 'string',
		specialty: 'string'
	}
});
