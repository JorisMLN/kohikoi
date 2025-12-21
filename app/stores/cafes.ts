// app/stores/cafes.ts

import { defineStore } from 'pinia'

export const useCafesStore = defineStore('cafes', {
  // 📊 STATE = Les données
state: () => ({
  cafes: [
    // === KISSATEN (喫茶店) - 8 cafés ===
    {
      id: 1,
      slug: 'chatei-hatou',
      name: 'Chatei Hatou',
      name_ja: '茶亭羽當',
      category: 'kissaten',
      city: 'Tokyo',
      address: 'Shibuya',
      description: 'Kissaten traditionnel depuis 1989, ambiance Showa authentique',
      photo_url: '/images/cafes/chatei-hatou.jpg',
      google_maps_url: 'https://maps.app.goo.gl/chatei-hatou'
    },
    {
      id: 2,
      slug: 'cafe-trois-bagues',
      name: 'Café Trois Bagues',
      name_ja: 'カフェ・トロワバーグ',
      category: 'kissaten',
      city: 'Tokyo',
      address: 'Jimbocho',
      description: 'Kissaten historique depuis 1976, torréfaction maison',
      photo_url: '/images/cafes/trois-bagues.jpg',
      google_maps_url: 'https://maps.app.goo.gl/trois-bagues'
    },
    {
      id: 3,
      slug: 'galant',
      name: 'Galant',
      name_ja: 'ギャラン',
      category: 'kissaten',
      city: 'Tokyo',
      address: 'Ueno',
      description: 'Kissaten rétro depuis 1977, spécialité de pancakes',
      photo_url: '/images/cafes/galant.jpg',
      google_maps_url: 'https://maps.app.goo.gl/galant'
    },
    {
      id: 4,
      slug: 'takase',
      name: 'Takase',
      name_ja: '高瀬',
      category: 'kissaten',
      city: 'Kyoto',
      address: 'Gion',
      description: 'Kissaten traditionnel de Gion, atmosphère paisible',
      photo_url: '/images/cafes/takase.jpg',
      google_maps_url: 'https://maps.app.goo.gl/takase'
    },
    {
      id: 5,
      slug: 'tsukiji-aozora-sandaime',
      name: 'Tsukiji Aozora Sandaime',
      name_ja: '築地青空三代目',
      category: 'kissaten',
      city: 'Tokyo',
      address: 'Tsukiji',
      description: 'Kissaten du marché de Tsukiji, morning set réputé',
      photo_url: '/images/cafes/aozora.jpg',
      google_maps_url: 'https://maps.app.goo.gl/aozora'
    },
    {
      id: 6,
      slug: 'arabica',
      name: 'Arabica',
      name_ja: 'アラビカ',
      category: 'kissaten',
      city: 'Osaka',
      address: 'Shinsaibashi',
      description: 'Kissaten emblématique d\'Osaka depuis 1950',
      photo_url: '/images/cafes/arabica-osaka.jpg',
      google_maps_url: 'https://maps.app.goo.gl/arabica'
    },
    {
      id: 7,
      slug: 'lion',
      name: 'Lion',
      name_ja: 'ライオン',
      category: 'kissaten',
      city: 'Tokyo',
      address: 'Shibuya',
      description: 'Kissaten musical avec concerts de musique classique',
      photo_url: '/images/cafes/lion.jpg',
      google_maps_url: 'https://maps.app.goo.gl/lion'
    },
    {
      id: 8,
      slug: 'rusk',
      name: 'Rusk',
      name_ja: 'ラスク',
      category: 'kissaten',
      city: 'Yokohama',
      address: 'Motomachi',
      description: 'Kissaten de Yokohama, spécialité de toast épais',
      photo_url: '/images/cafes/rusk.jpg',
      google_maps_url: 'https://maps.app.goo.gl/rusk'
    },

    // === JUNSEIKISSATEN (純喫茶) - 7 cafés ===
    {
      id: 9,
      slug: 'cafe-bach',
      name: 'Café Bach',
      name_ja: 'カフェ・バッハ',
      category: 'junseikissaten',
      city: 'Tokyo',
      address: 'Minami-Senju',
      description: 'Pure café avec torréfaction artisanale depuis 1968',
      photo_url: '/images/cafes/cafe-bach.jpg',
      google_maps_url: 'https://maps.app.goo.gl/bach'
    },
    {
      id: 10,
      slug: 'cafe-sunshine',
      name: 'Café Sunshine',
      name_ja: 'カフェ・サンシャイン',
      category: 'junseikissaten',
      city: 'Osaka',
      address: 'Kitahama',
      description: 'Junseikissaten réputé, silence total exigé',
      photo_url: '/images/cafes/sunshine.jpg',
      google_maps_url: 'https://maps.app.goo.gl/sunshine'
    },
    {
      id: 11,
      slug: 'hiraoka-coffee',
      name: 'Hiraoka Coffee',
      name_ja: '平岡珈琲',
      category: 'junseikissaten',
      city: 'Osaka',
      address: 'Namba',
      description: 'Café bouillu traditionnel depuis 1921, méthode unique',
      photo_url: '/images/cafes/hiraoka.jpg',
      google_maps_url: 'https://maps.app.goo.gl/hiraoka'
    },
    {
      id: 12,
      slug: 'smell',
      name: 'Smell',
      name_ja: 'スメル',
      category: 'junseikissaten',
      city: 'Tokyo',
      address: 'Asakusabashi',
      description: 'Pure café austère des années 1950, ambiance méditative',
      photo_url: '/images/cafes/smell.jpg',
      google_maps_url: 'https://maps.app.goo.gl/smell'
    },
    {
      id: 13,
      slug: 'sarutahiko',
      name: 'Sarutahiko Coffee',
      name_ja: '猿田彦珈琲',
      category: 'junseikissaten',
      city: 'Tokyo',
      address: 'Ebisu',
      description: 'Junseikissaten moderne, torréfaction sur place',
      photo_url: '/images/cafes/sarutahiko.jpg',
      google_maps_url: 'https://maps.app.goo.gl/sarutahiko'
    },
    {
      id: 14,
      slug: 'fuglen',
      name: 'Fuglen Tokyo',
      name_ja: 'フグレン東京',
      category: 'junseikissaten',
      city: 'Tokyo',
      address: 'Yoyogi',
      description: 'Pure café norvégien à Tokyo, design vintage',
      photo_url: '/images/cafes/fuglen.jpg',
      google_maps_url: 'https://maps.app.goo.gl/fuglen'
    },
    {
      id: 15,
      slug: 'stream',
      name: 'Stream',
      name_ja: 'ストリーム',
      category: 'junseikissaten',
      city: 'Kyoto',
      address: 'Kawaramachi',
      description: 'Junseikissaten épuré de Kyoto, focus sur le café',
      photo_url: '/images/cafes/stream.jpg',
      google_maps_url: 'https://maps.app.goo.gl/stream'
    },

    // === THIRD WAVE (サードウェーブ) - 8 cafés ===
    {
      id: 16,
      slug: 'onibus-coffee',
      name: 'Onibus Coffee',
      name_ja: 'オニバスコーヒー',
      category: 'third-wave',
      city: 'Tokyo',
      address: 'Nakameguro',
      description: 'Third wave specialty coffee, torréfaction artisanale',
      photo_url: '/images/cafes/onibus.jpg',
      google_maps_url: 'https://maps.app.goo.gl/onibus'
    },
    {
      id: 17,
      slug: 'arabica-kyoto',
      name: '% Arabica Kyoto',
      name_ja: '%アラビカ京都',
      category: 'third-wave',
      city: 'Kyoto',
      address: 'Arashiyama',
      description: 'Café third wave iconique avec vue sur la rivière',
      photo_url: '/images/cafes/arabica-kyoto.jpg',
      google_maps_url: 'https://maps.app.goo.gl/arabica-kyoto'
    },
    {
      id: 18,
      slug: 'mel-coffee-roasters',
      name: 'Mel Coffee Roasters',
      name_ja: 'メルコーヒーロースターズ',
      category: 'third-wave',
      city: 'Osaka',
      address: 'Fukushima',
      description: 'Torréfacteur third wave d\'Osaka depuis 2016',
      photo_url: '/images/cafes/mel.jpg',
      google_maps_url: 'https://maps.app.goo.gl/mel'
    },
    {
      id: 19,
      slug: 'blue-bottle-roppongi',
      name: 'Blue Bottle Roppongi',
      name_ja: 'ブルーボトル六本木',
      category: 'third-wave',
      city: 'Tokyo',
      address: 'Roppongi',
      description: 'Blue Bottle Coffee, pionnier third wave au Japon',
      photo_url: '/images/cafes/bluebottle.jpg',
      google_maps_url: 'https://maps.app.goo.gl/bluebottle'
    },
    {
      id: 20,
      slug: 'bear-pond-espresso',
      name: 'Bear Pond Espresso',
      name_ja: 'ベアポンドエスプレッソ',
      category: 'third-wave',
      city: 'Tokyo',
      address: 'Shimokitazawa',
      description: 'Espresso bar culte, "dirty" coffee signature',
      photo_url: '/images/cafes/bearpond.jpg',
      google_maps_url: 'https://maps.app.goo.gl/bearpond'
    },
    {
      id: 21,
      slug: 'leaves-coffee-roasters',
      name: 'Leaves Coffee Roasters',
      name_ja: 'リーブスコーヒーロースターズ',
      category: 'third-wave',
      city: 'Tokyo',
      address: 'Kiyosumi-Shirakawa',
      description: 'Café third wave dans le quartier des torréfacteurs',
      photo_url: '/images/cafes/leaves.jpg',
      google_maps_url: 'https://maps.app.goo.gl/leaves'
    },
    {
      id: 22,
      slug: 'weekenders-coffee',
      name: 'Weekenders Coffee',
      name_ja: 'ウィークエンダーズコーヒー',
      category: 'third-wave',
      city: 'Kyoto',
      address: 'Demachi-Yanagi',
      description: 'Café third wave de Kyoto, beans soigneusement sélectionnés',
      photo_url: '/images/cafes/weekenders.jpg',
      google_maps_url: 'https://maps.app.goo.gl/weekenders'
    },
    {
      id: 23,
      slug: 'glitch-coffee',
      name: 'Glitch Coffee',
      name_ja: 'グリッチコーヒー',
      category: 'third-wave',
      city: 'Tokyo',
      address: 'Jimbocho',
      description: 'Café third wave scientifique, méthodes d\'extraction précises',
      photo_url: '/images/cafes/glitch.jpg',
      google_maps_url: 'https://maps.app.goo.gl/glitch'
    },

    // === COFFEE STAND (コーヒースタンド) - 7 cafés ===
    {
      id: 24,
      slug: 'about-life-coffee-brewers',
      name: 'About Life Coffee Brewers',
      name_ja: 'アバウトライフコーヒーブリュワーズ',
      category: 'coffee-stand',
      city: 'Tokyo',
      address: 'Shibuya',
      description: 'Coffee stand urbain, take-away rapide et qualité',
      photo_url: '/images/cafes/aboutlife.jpg',
      google_maps_url: 'https://maps.app.goo.gl/aboutlife'
    },
    {
      id: 25,
      slug: 'bookends-coffee',
      name: 'Bookends Coffee Service',
      name_ja: 'ブックエンズコーヒー',
      category: 'coffee-stand',
      city: 'Tokyo',
      address: 'Shimokitazawa',
      description: 'Stand minimaliste, espresso à 200 yen',
      photo_url: '/images/cafes/bookends.jpg',
      google_maps_url: 'https://maps.app.goo.gl/bookends'
    },
    {
      id: 26,
      slug: 'ima-coffee-stand',
      name: 'Ima Coffee Stand',
      name_ja: 'イマコーヒースタンド',
      category: 'coffee-stand',
      city: 'Osaka',
      address: 'Shin-Osaka',
      description: 'Stand de gare, café rapide pour commuters',
      photo_url: '/images/cafes/ima.jpg',
      google_maps_url: 'https://maps.app.goo.gl/ima'
    },
    {
      id: 27,
      slug: 'little-nap-coffee-stand',
      name: 'Little Nap Coffee Stand',
      name_ja: 'リトルナップコーヒースタンド',
      category: 'coffee-stand',
      city: 'Tokyo',
      address: 'Yoyogi-Hachiman',
      description: 'Tiny stand emblématique, espresso parfait',
      photo_url: '/images/cafes/littlenap.jpg',
      google_maps_url: 'https://maps.app.goo.gl/littlenap'
    },
    {
      id: 28,
      slug: 'turret-coffee',
      name: 'Turret Coffee',
      name_ja: 'タレットコーヒー',
      category: 'coffee-stand',
      city: 'Tokyo',
      address: 'Sangenjaya',
      description: 'Stand compact, spécialité flat white',
      photo_url: '/images/cafes/turret.jpg',
      google_maps_url: 'https://maps.app.goo.gl/turret'
    },
    {
      id: 29,
      slug: 'passage-coffee',
      name: 'Passage Coffee',
      name_ja: 'パッセージコーヒー',
      category: 'coffee-stand',
      city: 'Tokyo',
      address: 'Omotesando',
      description: 'Stand caché dans un passage, café d\'excellence',
      photo_url: '/images/cafes/passage.jpg',
      google_maps_url: 'https://maps.app.goo.gl/passage'
    },
    {
      id: 30,
      slug: 'unlimited-coffee-bar',
      name: 'Unlimited Coffee Bar',
      name_ja: 'アンリミテッドコーヒーバー',
      category: 'coffee-stand',
      city: 'Fukuoka',
      address: 'Tenjin',
      description: 'Stand moderne de Fukuoka, ambiance décontractée',
      photo_url: '/images/cafes/unlimited.jpg',
      google_maps_url: 'https://maps.app.goo.gl/unlimited'
    },

    // === OCHAYA / TEA HOUSE (お茶屋) - 8 cafés ===
    {
      id: 31,
      slug: 'yugen',
      name: 'Yugen',
      name_ja: '幽玄',
      category: 'ochaya',
      city: 'Kyoto',
      address: 'Nakagyo-ku',
      description: 'Salon de thé zen, cérémonie du thé traditionnelle',
      photo_url: '/images/cafes/yugen.jpg',
      google_maps_url: 'https://maps.app.goo.gl/yugen'
    },
    {
      id: 32,
      slug: 'kagizen-yoshifusa',
      name: 'Kagizen Yoshifusa',
      name_ja: '鍵善良房',
      category: 'ochaya',
      city: 'Kyoto',
      address: 'Gion',
      description: 'Salon de thé historique de Gion depuis 1716',
      photo_url: '/images/cafes/kagizen.jpg',
      google_maps_url: 'https://maps.app.goo.gl/kagizen'
    },
    {
      id: 33,
      slug: 'chasanraku',
      name: 'Chasanraku',
      name_ja: '茶三楽',
      category: 'ochaya',
      city: 'Kyoto',
      address: 'Arashiyama',
      description: 'Salon de thé d\'Arashiyama, vue sur la bambouseraie',
      photo_url: '/images/cafes/chasanraku.jpg',
      google_maps_url: 'https://maps.app.goo.gl/chasanraku'
    },
    {
      id: 34,
      slug: 'ippodo-tea',
      name: 'Ippodo Tea',
      name_ja: '一保堂茶舗',
      category: 'ochaya',
      city: 'Kyoto',
      address: 'Teramachi',
      description: 'Maison de thé depuis 1717, dégustation premium',
      photo_url: '/images/cafes/ippodo.jpg',
      google_maps_url: 'https://maps.app.goo.gl/ippodo'
    },
    {
      id: 35,
      slug: 'nakamura-tokichi',
      name: 'Nakamura Tokichi',
      name_ja: '中村藤吉',
      category: 'ochaya',
      city: 'Kyoto',
      address: 'Uji',
      description: 'Salon de thé d\'Uji, matcha de qualité supérieure',
      photo_url: '/images/cafes/nakamura.jpg',
      google_maps_url: 'https://maps.app.goo.gl/nakamura'
    },
    {
      id: 36,
      slug: 'saryo-tsujiri',
      name: 'Saryo Tsujiri',
      name_ja: '茶寮都路里',
      category: 'ochaya',
      city: 'Kyoto',
      address: 'Gion',
      description: 'Célèbre pour ses parfaits au matcha, ambiance raffinée',
      photo_url: '/images/cafes/tsujiri.jpg',
      google_maps_url: 'https://maps.app.goo.gl/tsujiri'
    },
    {
      id: 37,
      slug: 'higashiya-ginza',
      name: 'Higashiya Ginza',
      name_ja: 'ヒガシヤ銀座',
      category: 'ochaya',
      city: 'Tokyo',
      address: 'Ginza',
      description: 'Salon de thé moderne, wagashi contemporains',
      photo_url: '/images/cafes/higashiya.jpg',
      google_maps_url: 'https://maps.app.goo.gl/higashiya'
    },
    {
      id: 38,
      slug: 'cha-no-ki',
      name: 'Cha no Ki',
      name_ja: '茶の木',
      category: 'ochaya',
      city: 'Nara',
      address: 'Naramachi',
      description: 'Salon de thé traditionnel dans une machiya restaurée',
      photo_url: '/images/cafes/chanoki.jpg',
      google_maps_url: 'https://maps.app.goo.gl/chanoki'
    },

    // === BOOK CAFE (ブックカフェ) - 7 cafés ===
    {
      id: 39,
      slug: 'daikanyama-tsutaya',
      name: 'Daikanyama T-Site',
      name_ja: '代官山 蔦屋書店',
      category: 'book-cafe',
      city: 'Tokyo',
      address: 'Daikanyama',
      description: 'Librairie-café emblématique, collection design',
      photo_url: '/images/cafes/tsutaya.jpg',
      google_maps_url: 'https://maps.app.goo.gl/tsutaya'
    },
    {
      id: 40,
      slug: 'bibliotheque',
      name: 'Café & Books Bibliotheque',
      name_ja: 'カフェ＆ブックス ビブリオテーク',
      category: 'book-cafe',
      city: 'Osaka',
      address: 'Umeda',
      description: 'Book café avec 20 000 livres, ambiance chaleureuse',
      photo_url: '/images/cafes/bibliotheque.jpg',
      google_maps_url: 'https://maps.app.goo.gl/bibliotheque'
    },
    {
      id: 41,
      slug: 'rbl-cafe',
      name: 'RBL CAFE',
      name_ja: 'アールビーエルカフェ',
      category: 'book-cafe',
      city: 'Tokyo',
      address: 'Shimokitazawa',
      description: 'Book café cozy de Shimokitazawa, sélection indie',
      photo_url: '/images/cafes/rbl.jpg',
      google_maps_url: 'https://maps.app.goo.gl/rbl'
    },
    {
      id: 42,
      slug: 'morioka-shoten',
      name: 'Morioka Shoten',
      name_ja: '森岡書店',
      category: 'book-cafe',
      city: 'Tokyo',
      address: 'Ginza',
      description: 'Librairie unique : 1 livre à la fois, café intégré',
      photo_url: '/images/cafes/morioka.jpg',
      google_maps_url: 'https://maps.app.goo.gl/morioka'
    },
    {
      id: 43,
      slug: 'books-and-modern',
      name: 'Books and Modern',
      name_ja: 'ブックス&モダン',
      category: 'book-cafe',
      city: 'Kyoto',
      address: 'Kawaramachi',
      description: 'Book café moderne de Kyoto, livres d\'art et design',
      photo_url: '/images/cafes/booksmodern.jpg',
      google_maps_url: 'https://maps.app.goo.gl/booksmodern'
    },
    {
      id: 44,
      slug: 'bundan-coffee',
      name: 'Bundan Coffee & Beer',
      name_ja: '文壇珈琲',
      category: 'book-cafe',
      city: 'Tokyo',
      address: 'Kagurazaka',
      description: 'Café littéraire, ambiance d\'écrivains',
      photo_url: '/images/cafes/bundan.jpg',
      google_maps_url: 'https://maps.app.goo.gl/bundan'
    },
    {
      id: 45,
      slug: 'cow-books',
      name: 'COW BOOKS',
      name_ja: 'カウブックス',
      category: 'book-cafe',
      city: 'Tokyo',
      address: 'Nakameguro',
      description: 'Librairie vintage avec café, livres d\'occasion soigneusement sélectionnés',
      photo_url: '/images/cafes/cowbooks.jpg',
      google_maps_url: 'https://maps.app.goo.gl/cowbooks'
    },

    // === GALLERY CAFE (ギャラリーカフェ) - 8 cafés ===
    {
      id: 46,
      slug: 'arise-coffee',
      name: 'Arise Coffee',
      name_ja: 'アライズコーヒー',
      category: 'gallery-cafe',
      city: 'Tokyo',
      address: 'Kiyosumi-Shirakawa',
      description: 'Café-galerie près du musée d\'art contemporain',
      photo_url: '/images/cafes/arise.jpg',
      google_maps_url: 'https://maps.app.goo.gl/arise'
    },
    {
      id: 47,
      slug: 'weekenders-kagurazaka',
      name: 'Weekenders Coffee + Gallery',
      name_ja: 'ウィークエンダーズ神楽坂',
      category: 'gallery-cafe',
      city: 'Tokyo',
      address: 'Kagurazaka',
      description: 'Café-galerie-librairie, expositions mensuelles',
      photo_url: '/images/cafes/weekenders-gallery.jpg',
      google_maps_url: 'https://maps.app.goo.gl/weekenders-gallery'
    },
    {
      id: 48,
      slug: 'blue-books-cafe',
      name: 'Blue Books Cafe',
      name_ja: 'ブルーブックスカフェ',
      category: 'gallery-cafe',
      city: 'Tokyo',
      address: 'Jiyugaoka',
      description: 'Café-galerie élégant, expositions d\'artistes émergents',
      photo_url: '/images/cafes/bluebooks.jpg',
      google_maps_url: 'https://maps.app.goo.gl/bluebooks'
    },
    {
      id: 49,
      slug: 'hagiso',
      name: 'Hagiso',
      name_ja: 'はぎそう',
      category: 'gallery-cafe',
      city: 'Tokyo',
      address: 'Yanaka',
      description: 'Ancien appartement rénové en café-galerie, expositions art contemporain',
      photo_url: '/images/cafes/hagiso.jpg',
      google_maps_url: 'https://maps.app.goo.gl/hagiso'
    },
    {
      id: 50,
      slug: 'gallery-by-the-harbour',
      name: 'Gallery by the Harbour',
      name_ja: 'ギャラリーバイザハーバー',
      category: 'gallery-cafe',
      city: 'Yokohama',
      address: 'Minato Mirai',
      description: 'Café-galerie avec vue sur le port, expositions photographiques',
      photo_url: '/images/cafes/harbour.jpg',
      google_maps_url: 'https://maps.app.goo.gl/harbour'
    },
    {
      id: 51,
      slug: 'readan-deat',
      name: 'Readan Deat',
      name_ja: 'リーダンディート',
      category: 'gallery-cafe',
      city: 'Tokyo',
      address: 'Ebisu',
      description: 'Café-galerie underground, expositions avant-gardistes',
      photo_url: '/images/cafes/readan.jpg',
      google_maps_url: 'https://maps.app.goo.gl/readan'
    },
    {
      id: 52,
      slug: 'souvenir-from-tokyo',
      name: 'Souvenir from Tokyo',
      name_ja: 'スーベニア',
      category: 'gallery-cafe',
      city: 'Tokyo',
      address: 'Shibuya',
      description: 'Café-galerie concept store, artisanat local et café',
      photo_url: '/images/cafes/souvenir.jpg',
      google_maps_url: 'https://maps.app.goo.gl/souvenir'
    },
    {
      id: 53,
      slug: 'happa-stand',
      name: 'Happa Stand',
      name_ja: 'ハッパスタンド',
      category: 'gallery-cafe',
      city: 'Tokyo',
      address: 'Omotesando',
      description: 'Café-galerie végétal, expositions botaniques et design',
      photo_url: '/images/cafes/happa.jpg',
      google_maps_url: 'https://maps.app.goo.gl/happa'
    }
  ],
  
  selectedCategory: 'all',
  searchQuery: ''
}),
  
  // 🧮 GETTERS = Données calculées
  getters: {
    // Tous les cafés
    allCafes: (state) => state.cafes,
    
    // Cafés filtrés par catégorie
    filteredCafes: (state) => {
      let filtered = state.cafes
      
      // Filtre par catégorie
      if (state.selectedCategory !== 'all') {
        filtered = filtered.filter(c => c.category === state.selectedCategory)
      }
      
      // Filtre par recherche
      if (state.searchQuery) {
        filtered = filtered.filter(c => 
          c.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          c.city.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }
      
      return filtered
    },
    
    // Trouver un café par slug
    getCafeBySlug: (state) => {
      return (slug: string) => state.cafes.find(c => c.slug === slug)
    },
    
    // Cafés par catégorie
    getCafesByCategory: (state) => {
      return (category: string) => state.cafes.filter(c => c.category === category)
    }
  },
  
  // 🔧 ACTIONS = Modifier le state
  actions: {
    setCategory(category: string) {
      this.selectedCategory = category
    },
    
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    
    clearFilters() {
      this.selectedCategory = 'all'
      this.searchQuery = ''
    },
    
    // Plus tard : fetch depuis API
    async fetchCafes() {
      // const { data } = await useFetch('/api/cafes')
      // this.cafes = data.value
    }
  }
})