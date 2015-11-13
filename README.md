# react-docgen loader for webpack

## Usage

``` javascript
var docs = require("!!docgen!./Component.jsx");
// => returns Component.jsx documentation object if Component definition is found
```

> NOTE: I use double !! to disable all other loaders. react-docgen cannot gather Component information if the Component has been babeled

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
