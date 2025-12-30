interface CategoryDescription {
  slug: string
  descriptions: {
    [key in Locale]: string[]
  }
}

const categoryDescriptions: CategoryDescription[] = [
  {
    slug: 'ochaya',
    descriptions: {
      fr: [
        'Salons de thé traditionnels japonais dédiés à l\'art du thé.',
        'Atmosphère zen et raffinée, parfois avec cérémonie du thé.',
        'Propose des thés verts premium (matcha, sencha, gyokuro) et wagashi.',
        'Expérience contemplative dans un cadre traditionnel japonais.'
      ],
      en: [
        'Traditional Japanese tea houses dedicated to the art of tea.',
        'Zen and refined atmosphere, sometimes with tea ceremonies.',
        'Offers premium green teas (matcha, sencha, gyokuro) and wagashi.',
        'Contemplative experience in a traditional Japanese setting.'
      ],
      ja: [
        '日本茶の芸術に特化した伝統的な茶房。',
        '禅的で洗練された雰囲気、時には茶道体験も。',
        '抹茶、煎茶、玉露などの高級緑茶と和菓子を提供。',
        '伝統的な日本の空間で静かなひとときを。'
      ]
    }
  },
  {
    slug: 'kissaten',
    descriptions: {
      fr: [
        'Cafés rétro emblématiques de l\'ère Showa (1926-1989).',
        'Décor vintage, mobilier d\'époque et ambiance nostalgique.',
        'Café siphon, napolitain et crème-soda font partie des classiques.',
        'Lieux de rencontre intergénérationnels, témoins d\'une époque révolue.'
      ],
      en: [
        'Iconic retro cafés from the Showa era (1926-1989).',
        'Vintage décor, period furniture and nostalgic atmosphere.',
        'Siphon coffee, Neapolitan pasta and cream soda are classics.',
        'Intergenerational meeting places, witnesses of a bygone era.'
      ],
      ja: [
        '昭和時代（1926-1989）を象徴するレトロな喫茶店。',
        'ヴィンテージな内装、当時の家具、ノスタルジックな雰囲気。',
        'サイフォンコーヒー、ナポリタン、クリームソーダが定番。',
        '世代を超えた交流の場、失われた時代の証人。'
      ]
    }
  },
  {
    slug: 'junseikissaten',
    descriptions: {
      fr: [
        'Version puriste du kissaten, sans alcool ni divertissement.',
        'Silence et contemplation sont de mise dans ces cafés méditatifs.',
        'Focus absolu sur la qualité du café et l\'atmosphère sereine.',
        'Refuges urbains pour ceux qui cherchent le calme et l\'introspection.'
      ],
      en: [
        'Purist version of kissaten, without alcohol or entertainment.',
        'Silence and contemplation are the norm in these meditative cafés.',
        'Absolute focus on coffee quality and serene atmosphere.',
        'Urban refuges for those seeking calm and introspection.'
      ],
      ja: [
        '喫茶店の純粋主義版、アルコールや娯楽なし。',
        '静寂と瞑想を重んじる落ち着いた喫茶店。',
        'コーヒーの品質と静謐な雰囲気に絶対的な焦点。',
        '静けさと内省を求める人々のための都会の避難所。'
      ]
    }
  },
  {
    slug: 'book-cafe',
    descriptions: {
      fr: [
        'Cafés-librairies alliant lecture, culture et convivialité.',
        'Collections de livres, magazines, BD et parfois expositions d\'art.',
        'Atmosphère studieuse propice à la lecture prolongée et au travail.',
        'Espaces modernes où culture littéraire et artistique se rencontrent.'
      ],
      en: [
        'Café-bookstores combining reading, culture and conviviality.',
        'Collections of books, magazines, comics and sometimes art exhibitions.',
        'Studious atmosphere conducive to extended reading and work.',
        'Modern spaces where literary and artistic culture meet.'
      ],
      ja: [
        '読書、文化、交流を融合させたカフェ併設の書店。',
        '本、雑誌、漫画、時にはアート展示のコレクション。',
        '長時間の読書や仕事に適した勉強的な雰囲気。',
        '文学とアートが出会う現代的な空間。'
      ]
    }
  },
  {
    slug: 'third-wave',
    descriptions: {
      fr: [
        'Cafés spécialisés de la troisième vague, obsédés par la qualité.',
        'Traçabilité des grains, torréfaction artisanale et méthodes manuelles.',
        'Baristas experts qui considèrent le café comme un art.',
        'Atmosphère minimaliste et design, focus absolu sur le produit.'
      ],
      en: [
        'Specialty cafés of the third wave, obsessed with quality.',
        'Bean traceability, artisanal roasting and manual brewing methods.',
        'Expert baristas who consider coffee as an art form.',
        'Minimalist and design atmosphere, absolute focus on the product.'
      ],
      ja: [
        '品質に徹底的にこだわるサードウェーブの専門店。',
        '豆のトレーサビリティ、職人的焙煎、手動抽出法。',
        'コーヒーを芸術と考える熟練バリスタ。',
        'ミニマルでデザイン性の高い空間、製品への絶対的な集中。'
      ]
    }
  },
  {
    slug: 'coffee-stand',
    descriptions: {
      fr: [
        'Comptoirs compacts offrant un café de qualité à emporter.',
        'Service rapide et efficace pour les urbains pressés.',
        'Souvent spécialisés dans une méthode d\'extraction particulière.',
        'Concept minimaliste axé sur l\'essentiel : un excellent café.'
      ],
      en: [
        'Compact counters offering quality coffee to go.',
        'Fast and efficient service for busy urbanites.',
        'Often specialized in a particular brewing method.',
        'Minimalist concept focused on the essential: excellent coffee.'
      ],
      ja: [
        'テイクアウト用の高品質なコーヒーを提供する小型カウンター。',
        '忙しい都会人のための迅速で効率的なサービス。',
        '特定の抽出方法に特化していることが多い。',
        '本質に焦点を当てたミニマルなコンセプト：優れたコーヒー。'
      ]
    }
  },
  {
    slug: 'onsen-cafe',
    descriptions: {
      fr: [
        'Établissements uniques combinant café et sources thermales.',
        'Détente post-bain autour d\'un café ou thé dans un cadre apaisant.',
        'Souvent situés dans des quartiers thermaux ou ryokan traditionnels.',
        'Expérience complète alliant bien-être corporel et moment gourmand.'
      ],
      en: [
        'Unique establishments combining café and hot springs.',
        'Post-bath relaxation with coffee or tea in a soothing setting.',
        'Often located in hot spring districts or traditional ryokan.',
        'Complete experience combining physical wellness and culinary moment.'
      ],
      ja: [
        'カフェと温泉を組み合わせたユニークな施設。',
        '心地よい空間で入浴後のコーヒーやお茶でリラックス。',
        '温泉街や伝統的な旅館に位置することが多い。',
        '身体の健康と美食の時間を融合させた完全な体験。'
      ]
    }
  }
]

// Get description by slug and locale
export function getCategoryDescription(slug: string, locale: Locale = 'ja'): string[] | null {
  const category = categoryDescriptions.find(cat => cat.slug === slug)
  return category ? category.descriptions[locale] : null
}

// Get all descriptions for a slug (all languages)
export function getAllDescriptions(slug: string): CategoryDescription['descriptions'] | null {
  const category = categoryDescriptions.find(cat => cat.slug === slug)
  return category ? category.descriptions : null
}

// Get description as single string (joined with line breaks)
export function getCategoryDescriptionText(slug: string, locale: Locale = 'ja'): string | null {
  const descriptions = getCategoryDescription(slug, locale)
  return descriptions ? descriptions.join('\n') : null
}

export { categoryDescriptions }
export type { CategoryDescription, Locale }