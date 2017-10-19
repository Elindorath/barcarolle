var m = require('mithril');
// var Promise = require('bluebird');

var navMain = {};

navMain.oninit = function oninit() {
  console.log('ON INIT');
};

navMain.oncreate = function oncreate() {
  console.log('ON CREATE');
};

navMain.onupdate = function onupdate() {
  console.log('ON UPDATE');
};

navMain.onbeforeupdate = function onbeforeupdate() {
  console.log('ON BEFORE UPDATE');
};

navMain.onbeforeremove = function onbeforeremove(vnode) {
  vnode.dom.classList.add('nav-main--deco2');

  console.log('ON BEFORE REMOVE');

  return new Promise(function(resolve) {
    setTimeout(resolve, 1000);
  });
};

navMain.onremove = function onremove(vnode) {
  console.log('ON REMOVE');
};

navMain.view = function view(vnode) {
  return m('.nav-main.nav-main--' + vnode.attrs.classModifier, {
    onclick: m.route.set.bind(m.route, '/deco', null),
  }, [
    m('.nav-main__txt', vnode.attrs.txt),
  ]);
};

module.exports = navMain;
