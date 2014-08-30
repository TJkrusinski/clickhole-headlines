'use strict';

var jsdom = require('jsdom');

var urlBase = 'http://www.clickhole.com/features/articles/?page=';
var maxPage = 10;

/**
 *  Expose `scrapePage`
 */

module.exports = scrapePage;

/**
 *  Scrape a page
 *
 *  @param {Function} cb
 *  @param {Number} pages - max number of pages
 *  @param {Number} page - the current page
 *  @param {String} url - override the base url
 *  @return undefined
 *  @api public
 */

function scrapePage(cb, pages, page, links) {
  if (!page || isNaN(page)) page = 1;
  if (isNaN(pages)) pages = 10;
  links = links || [];

  jsdom.env({
    url: urlBase+page,
    scripts: ['http://code.jquery.com/jquery.js'],
    done: function(err, window){
      if (err) return cb(err);

      _getLinks(window, links);

      page++;
      pages--;
      if (!pages) return cb(null, links);

      scrapePage(cb, pages, page, links);
    }
  });
};

/**
 *  Get article links from the page
 *
 *  @param {Object} window - jsdom `window` object
 *  @param {Array} links - array of headline links
 *  @api private
 */

function _getLinks (window, links) {
  var $ = window.$;

  $('.headline').each(function(){
    var text = $(this).text().trim();
    links.push(text);
  });
};
