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
      onmouseenter: onmouseenter,
      onmouseleave: onmouseleave,
      // oncreate: oncreate,
    }, [
      m('.deco__cat__img'),
      m('.deco__cat__overlay', {
        oncreate: oncreate,
      }, [
        m('.deco__cat__overlay__value', 'Category ' + catNb),
      ]),
    ]);
  }
};

function oncreate(vnode) {
  var position = vnode.dom.getBoundingClientRect();

  vnode.dom.style.backgroundPosition = -position.left + 'px ' + -position.top + 'px';
}

function onmouseenter(e) {
  var elem = e.target;
  var position = elem.getBoundingClientRect();
  var overlay = elem.querySelector('.deco__cat__overlay');

  console.log(position);

  overlay.style.backgroundPosition = -position.left + 'px ' + -(position.top + window.scrollY) + 'px';
  overlay.style.transform = 'translateY(-100%)';
}

function onmouseleave(e) {
  var elem = e.target;
  var overlay = elem.querySelector('.deco__cat__overlay');
  var position = overlay.getBoundingClientRect();

  console.log(position);

  overlay.style.backgroundPosition = -position.left + 'px ' + -(position.top + window.scrollY + position.height) + 'px';
  overlay.style.transform = 'translateY(0)';
}

module.exports = home;
