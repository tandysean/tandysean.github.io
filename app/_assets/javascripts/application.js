/*globals $ */
require('jquery');

var map = require('./map'),
    portfolio = portfolio || {};

portfolio.init = function () {
  console.log('JQuery and Modernizr loading...');
  map.initializeMap();
}

portfolio.init();
