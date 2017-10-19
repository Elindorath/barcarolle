var m = require('mithril');
var stream = require('mithril/stream');

var TABS = {
  PRODUIT: 0,
  CREATOR: 1,
  DETAILS: 2,
};

var tabs = [
  'Produit',
  'Créateur',
  'Détails',
];

var item = {};

item.currentTab = TABS.PRODUIT;

item.view = function view(vnode) {
  return m('.item', [
    m('.item__background'),
    m('.item__body', [
      m('.item__header', [
        m('.item__header__left', [
          m('.item__slideshow', [
            m('.item__slideshow__main'),
            m('.item__slideshow__list', [
              m('img.item__slideshow__list__thumb', {
                src: require('./assets/img/bol2.jpg')
              }),
              m('img.item__slideshow__list__thumb', {
                src: require('./assets/img/bol3.jpg')
              }),
              m('img.item__slideshow__list__thumb', {
                src: require('./assets/img/bol4.jpg')
              }),
            ]),
          ]),
        ]),
        m('.item__header__right', [
          m('.item__quote', 'Voici une petite phrase poétique décrivant la famille de produit parce qu\'elle est vraiment super'),
          m('.item__title', 'Un super nom de produit'),
        ]),
      ]),
      m('.item__tabs', [
        tabs.map(renderTab),
        m('.item__tabs__carousel', {
          class: 'item__tabs__carousel--' + vnode.state.currentTab,
        }, [
          m('.item__tabs__carousel__handler', [
            m('.item__tabs__carousel__handler__body', tabs.map(renderTabTxt)),
          ]),
        ]),
      ]),
    ]),
  ]);

  function renderTab(tab, i) {
    return m('.item__tab', {
      class: vnode.state.currentTab === i
        ? 'item__tab--selected'
        : '',
      onclick: () => vnode.state.currentTab = i,
    }, tab);
  }

  function renderTabTxt(tab, i) {
    return m('.item__tabs__carousel__handler__body__txt', (i + 1) + ' Nullam condimentum risus sem. Curabitur sed efficitur ante. Ut lacinia neque felis, euismod tempus sapien dictum sit amet. Donec commodo dapibus auctor. Nulla dapibus ante eget nisi placerat tincidunt. Cras venenatis aliquet ornare. Nulla nec sem ligula. Morbi eu elit aliquam, efficitur mi et, auctor dolor. Fusce id faucibus quam. Fusce vitae sapien nec eros convallis lobortis eget ut tortor. Etiam eros neque, sagittis vel ipsum a, ullamcorper auctor magna. Nullam pulvinar, magna sed viverra pretium, augue justo commodo nisi, eu ultrices nulla leo non ipsum.');
  }
};

module.exports = item;
