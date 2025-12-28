type Locale = 'ja' | 'fr' | 'en'

interface HomeContent {
  hero: {
    title: string
    subtitle: string
  }
  aboutUs: string[]
  howToUse: string[]
}

const homeContent: Record<Locale, HomeContent> = {
  ja: {
    hero: {
      title: '日本の喫茶文化を探索',
      subtitle: '東京から京都まで、本物の喫茶店、カフェ、茶房を発見しましょう'
    },
    aboutUs: [
      'Kohikoiは日本の喫茶文化を紹介する専門プラットフォームです。',
      '伝統的な喫茶店から最新のサードウェーブカフェまで、日本全国の隠れた名店を厳選してご紹介します。',
      '各カテゴリーは独自の歴史と文化を持ち、それぞれ異なる体験を提供しています。',
      'コーヒー愛好家、お茶愛好家、日本文化に興味のある方々のためのガイドです。'
    ],
    howToUse: [
      'カテゴリーから興味のある喫茶店のスタイルを選択してください。',
      '地図で近くのお店を探したり、評価やレビューで絞り込むことができます。',
      'お気に入りのお店を保存して、自分だけのコレクションを作成しましょう。',
      '各お店の詳細ページで営業時間、アクセス方法、特徴を確認できます。'
    ]
  },
  fr: {
    hero: {
      title: 'Explorez la culture café japonaise',
      subtitle: 'Découvrez les authentiques kissaten, cafés et salons de thé de Tokyo à Kyoto'
    },
    aboutUs: [
      'Kohikoi est une plateforme dédiée à la culture café japonaise.',
      'Des kissaten traditionnels aux cafés third wave modernes, nous sélectionnons les meilleures adresses à travers tout le Japon.',
      'Chaque catégorie possède sa propre histoire et culture, offrant des expériences uniques.',
      'Un guide pour les amateurs de café, de thé et de culture japonaise.'
    ],
    howToUse: [
      'Sélectionnez une catégorie selon le style de café qui vous intéresse.',
      'Explorez la carte pour trouver des établissements près de vous ou filtrez par note et avis.',
      'Sauvegardez vos cafés favoris pour créer votre propre collection.',
      'Consultez la page détaillée de chaque établissement pour les horaires, l\'accès et les spécialités.'
    ]
  },
  en: {
    hero: {
      title: 'Explore Japanese café culture',
      subtitle: 'Discover authentic kissaten, cafés and tea houses from Tokyo to Kyoto'
    },
    aboutUs: [
      'Kohikoi is a platform dedicated to Japanese café culture.',
      'From traditional kissaten to modern third wave cafés, we curate the best addresses across Japan.',
      'Each category has its own history and culture, offering unique experiences.',
      'A guide for coffee lovers, tea enthusiasts, and Japanese culture aficionados.'
    ],
    howToUse: [
      'Select a category based on the café style that interests you.',
      'Explore the map to find establishments near you or filter by rating and reviews.',
      'Save your favorite cafés to create your own collection.',
      'Check each establishment\'s detail page for hours, access and specialties.'
    ]
  }
}

export function getHomeContent(locale: Locale = 'ja'): HomeContent {
  return homeContent[locale]
}

export { homeContent }
export type { HomeContent, Locale }