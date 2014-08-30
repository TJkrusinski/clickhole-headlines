## clickhole-headlines

Get the most recent 200 headlines from clickhole.com.

## Usage

```javascript

var clickhole = require('clickhole-headlines');

clickhole(function(err, headlines){
  console.log(headlines);
  // an array of rediculous headlines
});

## Tests

Tests run using [mocha](visionmedia/mocha)

```bash
$ npm test
```
