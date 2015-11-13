/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Eisi Sig @eisisig
 */
var docgen = require('react-docgen');
var marked = require('marked');
var loaderUtils = require('loader-utils');

module.exports = function ( source ) {
	this.cacheable && this.cacheable();
	var query = loaderUtils.parseQuery(this.query);

	var value = {};

	try {
		value = docgen.parse(source);
		if ( query.markdownDescription && value.description ) {
			value.description = marked(value.description);
		}
	} catch ( e ) {
		// docgen - Error: No suitable component definition found.
	}

	this.values = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t");
};
