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
 *  @param {Number} pages - the number of pages to scrape
 *  @return undefined
 *  @api public
 */

function clickhole(cb, pages) {
  // don't let the user put in some weird number
  if (pages && (pages < 1 || pages > 10)) pages = 10;
  pages = pages || 10;
  scraper(cb, pages);
};
