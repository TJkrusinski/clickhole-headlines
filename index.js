'use strict';

var scraper = require('./lib/scraper');

/**
 *  Expose `clickhole`
 */

module.exports = clickhole;

/**
 *  Clickhole
 *
 *  @param {Function} cb
 *  @return undefined
 *  @api public
 */

function clickhole(cb) {
  if (typeof cb != 'function') throw new Error('Expected callback function');
  scraper(cb);
};
