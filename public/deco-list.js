var m = require('mithril');
var item = require('./item');

var items = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
];

var home = {};

home.currentItem = 0;

home.view = function view(vnode) {
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
        m('.body__handler', {
          style: {
            left: 'calc(' + (-976 * vnode.state.currentItem) + 'px - ' + vnode.state.currentItem + ' * (50% - 488px - 80px))'
          },
        }, items.map(renderItem)),
        // m('.decoItem', [
        //   m('img.decoItem__img', { src: 'https://judithmathon.files.wordpress.com/2014/06/mahatsara-corbeilles-en-fil-de-tecc81lecc81phone-acc80-partir-de-19e282ac.jpg?w=1200' }),
        //   m('.decoItem__desc', 'Nullam condimentum risus sem. Curabitur sed efficitur ante. Ut lacinia neque felis, euismod tempus sapien dictum sit amet. Donec commodo dapibus auctor. Nulla dapibus ante eget nisi placerat tincidunt. Cras venenatis aliquet ornare. Nulla nec sem ligula. Morbi eu elit aliquam, efficitur mi et, auctor dolor. Fusce id faucibus quam. Fusce vitae sapien nec eros convallis lobortis eget ut tortor. Etiam eros neque, sagittis vel ipsum a, ullamcorper auctor magna. Nullam pulvinar, magna sed viverra pretium, augue justo commodo nisi, eu ultrices nulla leo non ipsum.'),
        // ]),
        // m('.decoItem', [
        //   m('img.decoItem__img', { src: 'https://images.homify.com/image/upload/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1438081537/p/photo/image/134533/tchon-coquille-d-oeuf-L-grand-saladier-bambou-2.jpg' }),
        //   m('.decoItem__desc', 'Donec ultricies velit orci, vitae consequat felis porttitor id. Morbi rutrum massa risus. Donec ornare consectetur bibendum. Mauris a risus elementum diam tristique commodo ut id lorem. Suspendisse volutpat hendrerit euismod. Nulla vulputate est nec ipsum convallis laoreet. Suspendisse vel elit eu dui gravida luctus. Sed congue, magna at rutrum placerat, neque dolor ultricies tellus, sit amet finibus magna nisi vel dui. Nullam sit amet lobortis lorem. Pellentesque non libero non nisi consequat laoreet vitae at mi. In aliquet, turpis ac gravida aliquam, dolor nibh mattis metus, id vehicula tortor ligula nec lorem. Duis eu ipsum sit amet libero viverra eleifend non quis libero. Vestibulum tellus lacus, mollis et metus ut, iaculis vulputate lorem.'),
        // ]),
        // m('.decoItem', [
        //   m('img.decoItem__img', { src: 'https://format-com-cld-res.cloudinary.com/image/private/s--MqjsIDCs--/c_limit,g_center,h_1200,w_65535/a_auto,fl_keep_iptc.progressive,q_95/v1/32d27d04583567facc085209920331a9/detail-PUYOO-ARTIGA.jpg' }),
        //   m('.decoItem__desc', 'Aliquam venenatis dictum nunc ac luctus. Cras a quam sit amet leo bibendum faucibus et id augue. Ut molestie gravida dui id gravida. Nulla aliquet nulla at porta finibus. Quisque interdum massa non magna interdum consectetur. Fusce ligula mi, vehicula non nibh vitae, posuere euismod odio. Nam interdum nec diam a imperdiet. Fusce maximus lectus eget nisl placerat suscipit. Nulla molestie dui in laoreet ultricies. Vivamus maximus, urna id sollicitudin dapibus, nisl risus molestie lacus, eget vehicula nulla dui vel ex.'),
        // ]),
        // m('.decoItem', [
        //   m('img.decoItem__img', { src: 'http://www.arteslonga.com/3678-tm_thickbox_default/cache-pot-barbotine-faience-1900.jpg' }),
        //   m('.decoItem__desc', 'Sed et magna porttitor, condimentum nunc id, efficitur magna. Morbi quis arcu nunc. Vestibulum molestie varius velit, nec finibus leo fermentum non. In venenatis pellentesque eleifend. Cras vel elit laoreet ligula pretium faucibus. Mauris mattis nisi turpis, eget dignissim massa efficitur id. Nam aliquet augue consequat est aliquet, lacinia pellentesque dolor elementum. Curabitur in felis dignissim, sagittis felis vitae, porta elit. In ut mi ut mauris scelerisque iaculis. Nullam tortor justo, volutpat id aliquet placerat, finibus et erat.'),
        // ]),
        // m('.decoItem', [
        //   m('img.decoItem__img', { src: 'https://lillodesign.files.wordpress.com/2014/01/dsc_00901.jpg' }),
        //   m('.decoItem__desc', 'Mauris venenatis erat sed fringilla pharetra. Suspendisse eget quam vitae orci pellentesque fermentum. Nullam vel tempor nibh. Nulla ornare velit a velit finibus congue. Cras scelerisque est vitae mi viverra dignissim. Sed ornare id tellus non cursus. Pellentesque tincidunt interdum magna id feugiat. Fusce tincidunt facilisis mi, finibus rutrum felis fermentum non. Ut egestas augue cursus dui tristique lacinia. Phasellus ut leo et quam dapibus laoreet. Suspendisse tincidunt, magna eu dictum iaculis, tortor dui aliquet arcu, eu posuere odio turpis quis neque. Pellentesque ornare erat vel pretium viverra. Quisque cursus massa quis ligula tincidunt condimentum. Integer malesuada fermentum sem eu vulputate. Aenean in lacus massa. Pellentesque volutpat vestibulum augue ut hendrerit.'),
        // ]),
        // m('.decoItem', [
        //   m('img.decoItem__img', { src: 'http://cdn.shopify.com/s/files/1/0187/8080/products/facteur-celeste-corbeilles-noir.jpg?v=1453137381' }),
        //   m('.decoItem__desc', 'Nam convallis erat in nisl vehicula vestibulum. Sed eleifend lorem luctus egestas tincidunt. Donec tincidunt arcu et metus gravida porta. Praesent placerat pulvinar libero eu aliquet. Proin eu mi mauris. Cras at tempus lectus. Proin id turpis placerat, commodo felis nec, feugiat magna. Nam sed ultrices elit. Donec convallis efficitur urna, at mattis mauris. Integer tincidunt orci velit, non pellentesque arcu suscipit imperdiet.'),
        // ]),
        // m('.decoItem', [
        //   m('img.decoItem__img', { src: 'http://www.cabaneindigo.com/img/cms/lilokawa.JPG' }),
        //   m('.decoItem__desc', 'Nulla facilisi. Morbi pretium urna mi, sed blandit mauris tincidunt at. Nulla facilisi. Morbi finibus tellus sed diam tempor porttitor. Nunc rhoncus est et quam facilisis dignissim. Sed at ligula lacus. Donec at ultrices orci, condimentum semper nisi. Ut sed felis elit. Praesent a odio vel nunc iaculis gravida. Morbi pulvinar suscipit ligula, eu laoreet mauris fringilla sit amet. In vel enim ut leo varius posuere. Pellentesque maximus, mi et lobortis tincidunt, neque arcu auctor arcu, ac varius diam metus at justo.'),
        // ]),
      ]),
    ]),
  ];

  function renderItem(it, i) {
    var cssClass = 'body__handler__item--current';

    if (i < vnode.state.currentItem - 1)
      cssClass = 'body__handler__item--previous';
    else if (i === vnode.state.currentItem - 1)
      cssClass = 'body__handler__item--prevCurrent';
    else if (i === vnode.state.currentItem + 1)
      cssClass = 'body__handler__item--nextCurrent';
    else if (i > vnode.state.currentItem + 1)
      cssClass = 'body__handler__item--next';

    return m('.body__handler__item', {
      class  : cssClass,
      onclick: () => vnode.state.currentItem = i,
    }, [
      m(item),
    ]);
  }
};

module.exports = home;
