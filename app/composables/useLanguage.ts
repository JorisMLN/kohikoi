type Locale = 'fr' | 'en' | 'ja'

type Translations = {
  [key in Locale]: {
    [key: string]: string
  }
}

export const useLanguage = () => {
  const locale = useState<Locale>('locale', () => 'ja')
  
  const translations: Translations = {
        ja: {
      // Common
      search: "このカテゴリーで検索...",
      back: "戻る",
      profile: "プロフィール",
      informations: "情報",
      location: "場所",
      category: "カテゴリー",
      backToList: "リストに戻る",
      viewOnGoogleMaps: "Googleマップで見る",
      login: "login-jp",
      password: "password-jp",
      validate: "validate-jp",
      
      // Categories
      ochaya: "お茶屋",
      kissaten: "喫茶店",
      junseikissaten: "純喫茶",
      coffeeStand: "コーヒースタンド",
      galleryCafe: "ギャラリーカフェ",
      thirdWave: "サードウェーブ",
      bookCafe: "ブックカフェ",
      
      // Home
      title: "珈琲恋",
      tagline: "日本最高の喫茶店とお茶屋！",
      aboutUs: "私たちについて",
      howToUse: "Kohikoiの使い方",
      
      // Messages
      noResults: "結果なし",
      tryModifySearch: "検索を変更してみてください",
      noCafeYet: "まだデータベースにカフェがありません",
      resetSearch: "検索をリセット"
    },
    fr: {
      // Common
      search: "Rechercher dans cette catégorie...",
      back: "Retour",
      profile: "Profil",
      informations: "Informations",
      location: "Localisation",
      category: "Catégorie",
      backToList: "Retour à la liste",
      viewOnGoogleMaps: "Voir sur Google Maps",
      login: "login",
      password: "password",
      validate: "validate",
      
      // Categories
      ochaya: "Salon de Thé",
      kissaten: "Kissaten",
      junseikissaten: "Pure Café",
      coffeeStand: "Coffee Stand",
      galleryCafe: "Café-Galerie",
      thirdWave: "Third Wave",
      bookCafe: "Café-Librairie",
      
      // Home
      title: "Kohikoi",
      tagline: "Les meilleurs cafés et salons de thé du Japon !",
      aboutUs: "Qui sommes-nous ?",
      howToUse: "Comment utiliser Kohikoi ?",
      
      // Messages
      noResults: "Aucun résultat",
      tryModifySearch: "Essayez de modifier votre recherche",
      noCafeYet: "Il n'y a pas encore de cafés dans notre base",
      resetSearch: "Réinitialiser la recherche"
    },
    en: {
      // Common
      search: "Search in this category...",
      back: "Back",
      profile: "Profile",
      informations: "Informations",
      location: "Location",
      category: "Category",
      backToList: "Back to list",
      viewOnGoogleMaps: "View on Google Maps",
      login: "login",
      password: "password",
      validate: "validate",
      
      // Categories
      ochaya: "Japanese Tea House",
      kissaten: "Traditional Kissaten",
      junseikissaten: "Pure Café",
      coffeeStand: "Coffee Stand",
      galleryCafe: "Gallery Café",
      thirdWave: "Third Wave Coffee",
      bookCafe: "Book Café",
      
      // Home
      title: "Kohikoi",
      tagline: "The best cafés and tea houses in Japan!",
      aboutUs: "About Us",
      howToUse: "How to use Kohikoi?",
      
      // Messages
      noResults: "No results",
      tryModifySearch: "Try modifying your search",
      noCafeYet: "There are no cafés in our database yet",
      resetSearch: "Reset search"
    }
  }
  
  const t = (key: string): string => {
    return translations[locale.value]?.[key] || key
  }
  
  return { locale, t }
}