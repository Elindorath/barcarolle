var m = require('mithril');

var tea = {};

tea.view = function view(vnode) {
  return [
    m('.handler', [
      m('header.header', [
        m('.header__background'),
        m('img.logo', {
          src    : require('./assets/img/logo.png'),
          onclick: m.route.set.bind(m.route, '/', null),
        }),
      ]),
      m('.body.body--decoList', [
      ]),
    ]),
  ];
};

module.exports = tea;
