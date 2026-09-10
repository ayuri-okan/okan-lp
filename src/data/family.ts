/* ============================================================
   オカン。ち — 家族キャラクターの設定
   本文はすべて本人のキャラクターシートから転記したもの。
   勝手に足したり言い換えたりしない(設定の正本はシート側)。
   ============================================================ */

export type FamilyMember = {
  id: string
  /** 表示名。句点まで含めて名前 */
  name: string
  /** 続柄・肩書き */
  role: string
  /** カードの見出しに出る一言。シートのキャッチコピーから */
  catch: string
  personality: string[]
  likes: string[]
  dislikes: string[]
  /** 口ぐせ。カードでは先頭2つだけ出す */
  phrases: string[]
  /** 家族の中での役割 */
  duty: string
  src: string
  /** カードのアクセント色 */
  accent: 'orange' | 'green' | 'pink' | 'yellow' | 'purple' | 'blue'
  /** カードに埋め込む2コマ漫画 */
  manga?: { src: string; alt: string }
  /** オカン。のカードだけに置く家族の集合絵 */
  groupPhoto?: { src: string; alt: string }
}

export const familyMembers: FamilyMember[] = [
  {
    id: 'okan',
    name: 'オカン。',
    role: 'お母さん',
    catch: 'なんでもやっちゃう。うるさいけど、めっちゃ愛がある。',
    personality: ['明るい', '世話焼き', 'おおらか', '天然'],
    likes: ['家族', 'ごはん', 'おしゃべり', 'お酒', 'おもしろいこと', 'みんなの笑顔'],
    dislikes: ['細かい作業', 'ひとりの時間', '静かな場所'],
    phrases: ['ほな、いこか！', 'なんとかなるわ！', 'ごはん食べた？', 'ええやん！', 'しゃーないなぁ〜'],
    duty: '家族のまとめ役。ごはんと笑顔でみんなを元気にする最強のオカン。',
    src: '/family/okan.webp',
    accent: 'orange',
    groupPhoto: {
      src: '/family/okanchi-group.webp',
      alt: 'オカン。ちの看板の前に集まった家族全員。オトン。オカン。ムスコ。ムスメ。アカゴ。オジイ。オバア。イヌ。ネコ。',
    },
    manga: {
      src: '/family-manga/okan.webp',
      alt: 'オカン。が玄関の扉を開けて「ようこそ オカン。ちへ」と迎え、家族のアフロのシルエットを背に「うちの家族 紹介するわ」「ぜんいん アフロやで」と笑う2コマ漫画',
    },
  },
  {
    id: 'oton',
    name: 'オトン。',
    role: 'お父さん',
    catch: '家族のゆるい支え。でも、いざという時は頼りになる。',
    personality: ['マイペース', 'おおらか', '少し天然'],
    likes: ['ビール', 'テレビ', '家族の笑顔'],
    dislikes: ['細かいこと', '家事', '早起き'],
    phrases: ['ま、なんとかなるやろ！'],
    duty: '家族のゆるい支え役。でも、いざという時は頼りになる。',
    src: '/family/oton.webp',
    accent: 'green',
    manga: { src: '/family-manga/oton.webp', alt: '洗濯物を抱えたオカン。が手伝いを頼むと、オトン。が「ま なんとか なるやろ」と親指を立てる2コマ漫画' },
  },
  {
    id: 'musuko-big',
    name: 'ムスコ。',
    role: 'お兄ちゃん',
    catch: 'やんちゃで元気いっぱい。言い訳の達人。でも、どこか憎めない。',
    personality: ['やんちゃ', '元気', 'マイペース', '素直'],
    likes: ['ゲーム', 'サッカー', 'お菓子', 'ヒーロー', '恐竜', 'イタズラ'],
    dislikes: ['宿題', 'お風呂', '早寝', 'お片付け'],
    phrases: ['だって…', 'いやや！', 'あとで！', 'バレてないやろ？', 'ほんまに？', 'いま行く！'],
    duty: '家族のムードメーカー。オカンに怒られがちだけど、みんなに愛されるやんちゃ坊主。',
    src: '/family/musuko-big.webp',
    accent: 'blue',
    manga: { src: '/family-manga/musuko.webp', alt: 'オカン。に宿題を聞かれたムスコ。が「あとで やる たぶん」と目をそらす2コマ漫画' },
  },
  {
    id: 'musume',
    name: 'ムスメ。',
    role: 'お姉ちゃん',
    catch: 'ちっちゃいけどしっかり者。オカンの味方で家族のアイドル。',
    personality: ['しっかり者', 'おませ', '優しい'],
    likes: ['おしゃれ', 'スイーツ', '動物', 'オカン'],
    dislikes: ['虫', '野菜', '早起き'],
    phrases: ['これ、かわいくない？', 'ムリ〜！', 'オカン、見て見て〜！'],
    duty: '家族のアイドル。オカンの味方でみんなを癒す存在。',
    src: '/family/musume.webp',
    accent: 'pink',
    manga: { src: '/family-manga/musume.webp', alt: 'ムスメ。がリボンを見せて「かわいくない」と聞き、オカン。に褒められて得意げになる2コマ漫画' },
  },
  {
    id: 'musuko-kid',
    // 弟は表示名も「ムスコ。（弟）」で確定(本人確認済み 2026-09-10)
    name: 'ムスコ。（弟）',
    role: '弟',
    catch: 'やんちゃで元気いっぱい。オカンに怒られてもすぐに笑ってくる。',
    personality: ['やんちゃ', '元気', '素直', '甘えんぼう'],
    likes: ['車', '恐竜', 'お菓子', '公園', 'テレビ', 'オカン', '家族みんな'],
    dislikes: ['お風呂', 'お片付け', '野菜'],
    phrases: ['いやや！', 'あとで！', 'だって〜！', 'いこー！', 'みてみて！'],
    duty: '家族のムードメーカー。やんちゃでみんなを笑顔にする愛されキャラ。',
    src: '/family/musuko-kid.webp',
    accent: 'yellow',
    manga: { src: '/family-manga/musuko-kid.webp', alt: 'お風呂に誘われたムスコ。（弟）が「いやや」とオカン。の脚にしがみつく2コマ漫画' },
  },
  {
    id: 'akago',
    name: 'アカゴ。',
    role: '赤ちゃん',
    catch: 'ちいさいのに存在感ばつぐん。みんなの癒し。',
    personality: ['天真爛漫', '好奇心のかたまり'],
    likes: ['ミルク', 'だっこ', 'ねんね', 'オカンのにおい'],
    dislikes: ['おなかすいた時', 'おむつ替え'],
    phrases: ['あー！', 'うー！'],
    duty: 'みんなを癒す存在。家族のアイドル。泣いても笑ってもかわいい。',
    src: '/family/akago.webp',
    accent: 'yellow',
    manga: { src: '/family-manga/akago.webp', alt: 'ハイハイで近づいてきたアカゴ。が満面の笑みで両手を上げ、オカン。がとろける2コマ漫画' },
  },
  {
    id: 'ojii',
    name: 'オジイ。',
    role: 'おじいちゃん',
    catch: '自由人でマイペース。昔の話とくだらないダジャレが大好き。',
    personality: ['自由人', 'マイペース', 'おおらか'],
    likes: ['昔の話', '釣り', '囲碁', '昼寝', 'おやつ', 'ダジャレ'],
    dislikes: ['細かいこと', '早起き', 'スマホ'],
    phrases: ['まぁ、なんとかなるわ！', 'わしの若い頃はな〜', 'それ、ええやん！'],
    duty: '家族の癒し・相談役。時々、名言やダジャレでみんなを笑わせる。',
    src: '/family/ojii.webp',
    accent: 'green',
    manga: { src: '/family-manga/ojii.webp', alt: 'オジイ。の昔話にオカン。が「その話 三回目やで」と苦笑いする2コマ漫画' },
  },
  {
    id: 'obaa',
    name: 'オバア。',
    role: 'おばあちゃん',
    catch: 'やさしくてたくましい。オカンより一枚上手なみんなの癒し。',
    personality: ['やさしい', 'おおらか', 'しっかり者'],
    likes: ['おいしいごはん', 'お茶', '孫', '花', '畑', 'テレビ（時代劇）'],
    dislikes: ['細かいこと', 'スマホの操作'],
    phrases: ['ほな、いこか〜！', 'なんとかなるわ！', 'ごはん食べた？'],
    duty: '家族の癒し・知恵袋。オカンの良き相談相手で、ときどき突っ込み役。',
    src: '/family/obaa.webp',
    accent: 'purple',
    manga: { src: '/family-manga/obaa.webp', alt: 'ぐったりしたオカン。に、オバア。が黙っておにぎりを差し出す2コマ漫画' },
  },
  {
    id: 'inu',
    name: 'イヌ。',
    role: '愛犬',
    catch: 'いつもそばにいてくれる。食いしんぼうで家族みんなの癒し係。',
    personality: ['甘えんぼう', '元気', '食いしんぼう'],
    likes: ['ごはん', 'おさんぽ', 'みんなと一緒'],
    dislikes: ['おふろ', 'ひとりぼっち', '大きな音'],
    phrases: ['わん！', 'いこ！', 'ごはん!?', 'あそぼー！', 'だっこして〜！'],
    duty: '家族の癒し担当。いつもみんなのそばにいて、笑顔を増やすムードメーカー。',
    src: '/family/inu.webp',
    accent: 'orange',
    manga: { src: '/family-manga/inu.webp', alt: '料理中のオカン。の足元で、イヌ。がしっぽを振って見上げつづける2コマ漫画' },
  },
  {
    id: 'neko',
    name: 'ネコ。',
    role: '愛猫',
    catch: 'マイペースで気まぐれ。でも、ちゃんとみんなのこと見てる。',
    personality: ['マイペース', '気まぐれ', 'ツンデレ'],
    likes: ['さかな', 'ねこじゃらし', 'ひなたぼっこ', 'やわらかい場所', '高いところ'],
    dislikes: ['おふろ', '大きな音', 'だっこ（長時間）'],
    phrases: ['にゃー', '・・・（じーっ）', 'しらんよ', 'まあ、ええけど', 'にゃるほど'],
    duty: '家族をそっと見守る癒し担当。時々ツッコミ役。オカン家のマスコット。',
    src: '/family/neko.webp',
    accent: 'blue',
    manga: { src: '/family-manga/neko.webp', alt: 'オカン。が手をのばすとネコ。はそっぽを向き、しっぽの先だけが触れている2コマ漫画' },
  },
]

/** 家族の集合絵（看板つき） */
export const okanchiGroupImage = '/family/okanchi-group.webp'
