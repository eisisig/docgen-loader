/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Eisi Sig @eisisig
 */
var docgen = require('react-docgen');
var findAllComponentDefinitions = require('react-docgen/dist/resolver/findAllComponentDefinitions');
var marked = require('marked');
var loaderUtils = require('loader-utils');

if ( findAllComponentDefinitions.hasOwnProperty('default') ) {
	findAllComponentDefinitions = findAllComponentDefinitions.default
}

module.exports = function ( source ) {

	this.cacheable && this.cacheable();
	var query = loaderUtils.parseQuery(this.query);

	var value = {};

	try {
		value = docgen.parse(source, findAllComponentDefinitions);
		if ( value && query.markdownDescription) {
			value = value.map(function (doc) {
				if (doc.description) {
					doc.description = marked(doc.description);
				}
				return doc;
			});
		}
	} catch ( e ) {
		// console.log('ERROR in docgen-loader',  e);
	}

	return "module.exports = " + JSON.stringify(value, undefined, "\t");
};
