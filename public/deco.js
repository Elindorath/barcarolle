var m = require('mithril');

var categories = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];

var home = {};

home.view = function view() {
  return [
    m('header.header', [
      m('.header__background'),
      m('img.logo', {
        src    : require('./assets/img/logo.png'),
        onclick: m.route.set.bind(m.route, '/', null),
      }),
    ]),
    m('.body.body--deco', categories.map(renderCat)),
  ];

  function renderCat(cat, i) {
    var catNb = i + 1;

    return m('.deco__cat', {
      onclick : m.route.set.bind(m.route, '/deco/' + catNb, null),
      // oncreate: oncreate,
    }, [
      m('.deco__cat__img'),
      m('.deco__cat__overlay', {
        oncreate: oncreate,
      }, 'Category ' + catNb),
    ]);
  }
};

function oncreate(vnode) {
  var position = vnode.dom.getBoundingClientRect();

  vnode.dom.style.backgroundPosition = -position.left + 'px ' + -position.top + 'px';
}

module.exports = home;
