'use strict';

var assert = require('chai').assert;
var clickhole = require('..');

// basic test cause lazy
describe('scraper', function(){
  this.timeout(10000); // long timeout cause much servers
  it('scrapes 2 pages of clickhole articles', function(d){
    clickhole(function(err, links){
      assert.isNull(err);
      links.forEach(function(link){
        assert.isString(link);
      });
      d();
    }, 2);
  });
});
