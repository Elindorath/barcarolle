var m = require('mithril');
var home = require('./home');
var deco = require('./deco');
var decoItem = require('./deco-list');

require('./assets/css/main.css');
require('./assets/css/fonts.css');
require('./assets/css/home.css');
require('./assets/css/deco.css');
require('./assets/css/deco-list.css');
require('./assets/css/item.css');

m.route(document.body, '/', {
  '/'        : home,
  '/deco'    : deco,
  '/deco/:id': decoItem,
});
