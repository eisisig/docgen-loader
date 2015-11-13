/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Eisi Sig @eisisig
*/
var docgen = require('react-docgen');

module.exports = function(source) {
	this.cacheable && this.cacheable();

	var value = {};

	try {
		value = docgen.parse(source);
	} catch ( e ) {
		// docgen - Error: No suitable component definition found.
	}

	this.values = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t");
}
