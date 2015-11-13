# react-docgen loader for webpack

## Usage

``` javascript
var docs = require("!!docgen!./Component.jsx");
// => returns Component.jsx documentation object if Component definition is found
```

### Markdown description

If the description is in markdown you can parse it with `marked` by adding a query

``` javascript
var docs = require("!!docgen?markdownDescription!./Component.jsx");
```

> NOTE: I use double !! to disable all other loaders. react-docgen cannot gather Component information if the Component has been babeled

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
