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

### `clickhole(cb, maxPages)`

Takes two args, first is a required callback function, the second is the maximum number of pages to scrape.

## Tests

Tests run using [mocha](visionmedia/mocha)

```bash
$ npm test
```
