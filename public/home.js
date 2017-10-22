var m = require('mithril');
var navMain = require('./navMain');

var home = {};

home.onbeforeremove = function onbeforeremove() {
  console.log('HOME: ON BEFORE REMOVE');
};

home.view = function view() {
  return [
    m('header.header', [
      m('.header__background'),
      m('img.logo', {
        src    : require('./assets/img/logo.png'),
        onclick: m.route.set.bind(m.route, '/', null),
      }),
    ]),
    m('.body', [
      m('section.nav-section', [
        m('.nav-main.nav-main--deco', {
          onclick: m.route.set.bind(m.route, '/deco', null),
        }, [
          m('.nav-main__txt', 'Des objets et leur histoire ...'),
        ]),
        m('.nav-sub.nav-sub--tea', {
          onclick: m.route.set.bind(m.route, '/tea', null),
        }, [
          m('.nav-sub__txt', 'Le thé autrement ...'),
        ]),
        m('.nav-sub.nav-sub--library', [
          m('.nav-sub__txt', 'Nourrir aussi l\'esprit ...'),
        ]),
        m('.nav-sub.nav-sub--jewel', [
          m('.nav-sub__txt', 'Une beauté unique ...'),
        ]),
      ]),
    ]),
  ];
};

module.exports = home;
