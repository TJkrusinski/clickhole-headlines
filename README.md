## clickhole-headlines

Get up to 200 of the most recent headlines from clickhole.com.

## Usage

```javascript

var clickhole = require('clickhole-headlines');

clickhole(function(err, headlines){
  console.log(headlines);
  // an array of rediculous headlines
});
```

### `clickhole(cb)`

Takes one argument, a node-style callback with the second argument being an array of titles of buzzfeed posts.

## Tests

Tests run using [mocha](visionmedia/mocha)

```bash
$ npm test
```
