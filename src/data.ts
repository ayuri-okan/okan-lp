/* ============================================================
   オカン。LP — コンテンツと設定の一元管理ファイル
   文言・URL・項目を変えたいときは、基本このファイルだけ触ればOK。
   ============================================================ */

/* ---------- サイト設定 ---------- */

/** 公開先の本番URL。デプロイ後にここを実URLへ差し替える（OGP・canonicalに使用） */
export const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://okan-lp.vercel.app'

export const instagramUrl = 'https://www.instagram.com/okaaan_yade'
export const instagramHandle = '@okaaan_yade'

/**
 * LINE公式アカウントの友だち追加URL。
 * まだ開設していないので null。開設したら 'https://lin.ee/xxxxxxx' を入れるだけで
 * サイト内のCTAが一斉に「LINEを友だち追加」へ切り替わる。
 */
export const lineUrl: string | null = null

/**
 * 応募フォームの送信先。Web3Forms を使って応募内容をGmailへ直接届ける。
 *
 * ▼ アクセスキーの取り方（1分・登録不要・無料）
 *   1. https://web3forms.com/ を開く
 *   2. 受け取りたいGmailアドレスを入力して「Create Access Key」
 *   3. そのGmailに届いたアクセスキー（36文字のUUID）を下に貼る
 *
 * null のあいだは送信せず、InstagramのDMへご案内する。
 */
export const formAccessKey: string | null = 'cf5b3631-19f3-4643-9458-52c60f843755'

/** Web3Forms の受付エンドポイント（変更不要） */
export const formEndpoint = 'https://api.web3forms.com/submit'

/** 応募メールの件名につける接頭辞 */
export const formSubjectPrefix = '【オカン。応募】'

/** 申し込みフォームのアンカー */
export const applyAnchor = '#apply'

/* ---------- キャンペーン内容 ---------- */

export type GiftKey = 'illust' | 'ehon' | 'manga' | 'stamp'

export type Gift = {
  key: GiftKey
  emoji: string
  name: string
  unit: string
  note: string
}

/** 応募者が4つから1つ選ぶ無料プレゼント */
export const gifts: Gift[] = [
  { key: 'illust', emoji: '🎨', name: '思い出イラスト', unit: '1枚', note: 'お気に入りの1枚を、かわいい作品に' },
  { key: 'ehon', emoji: '📕', name: 'ミニ絵本', unit: '1作品', note: '今の気持ちを、未来の宝物に' },
  { key: 'manga', emoji: '📖', name: 'ミニ漫画', unit: '1作品', note: '家族のエピソードを、笑える1ページに' },
  { key: 'stamp', emoji: '💬', name: 'LINEスタンプ', unit: '8個セット', note: '家族の会話で、毎日使える' },
]

/* ---------- 各セクションのコンテンツ ---------- */

export type Work = { accent: 'green' | 'orange' | 'blue' | 'pink'; emoji: string; name: string; text: string; demo: string }

export const works: Work[] = [
  { accent: 'green', emoji: '💬', name: 'LINEスタンプ', text: '家族の会話で、毎日使える！', demo: 'おはよう！　だいすき！' },
  { accent: 'orange', emoji: '🎨', name: 'イラスト', text: 'お気に入りの1枚を、かわいく作品に。', demo: 'PHOTO → ART' },
  { accent: 'blue', emoji: '📖', name: 'マンガ', text: '家族のエピソードを、笑える1ページに。', demo: '「ママー！」' },
  { accent: 'pink', emoji: '📚', name: '絵本', text: '今の気持ちを、未来の宝物に。', demo: 'ずっと だいすき' },
]

export type Step = { no: string; title: string; text: string; badge: string }

export const flow: Step[] = [
  { no: '01', title: 'Instagramをフォロー', text: 'オカン。のInstagramをフォロー。キャンペーン投稿をチェックします。', badge: '約30秒' },
  { no: '02', title: '好きなプレゼントを選ぶ', text: 'イラスト・ミニ絵本・ミニ漫画・LINEスタンプ8個から、好きな1つを選びます。', badge: '4つから選べる' },
  { no: '03', title: 'フォームで応募する', text: 'お名前とInstagramのアカウント、選んだ作品を入力して送信します。', badge: '入力1分' },
  { no: '04', title: '写真とエピソードを送る', text: '受付メールの案内にそって、お気に入りの写真と、その日の小さな思い出を送ってください。', badge: 'スマホでかんたん' },
  { no: '05', title: '完成作品を受け取る', text: 'オカン。が心を込めて制作。完成した作品データをお届けします。', badge: '料金0円' },
]

export const moments: string[] = [
  '初めて歩いた日', '幼稚園の入園', '家族旅行', 'パパとの休日', '寝相', 'イヤイヤ期',
  '毎朝の謎ルーティン', '兄弟ゲンカ', '言い間違い', 'ごはん中に寝た日', '何気ない日常',
]

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  { q: '本当に無料ですか？', a: 'はい。応募条件を満たした方には、4種類から選んだ作品を1つ無料でプレゼントします。無料だけのご応募も大歓迎です。' },
  { q: '何をプレゼントしてもらえますか？', a: '思い出イラスト1枚・ミニ絵本1作品・ミニ漫画1作品・LINEスタンプ8個セットから、お好きな1つを選べます。' },
  { q: '誰でも応募できますか？', a: '初めて「オカン。」の無料プレゼント企画へ参加する方が対象です。最新条件はInstagramのキャンペーン投稿をご確認ください。' },
  { q: 'どんな写真を送ればいいですか？', a: 'お子さまやご家族、ペットなど、作品にしたい方が分かりやすく写っている写真がおすすめです。必要な枚数は受付後にご案内します。' },
  { q: '作品はどこに届きますか？', a: '完成作品はデータでお届けします。郵送ではなく、スマホに保存できる形でのお渡しです。' },
  { q: '写真は公開されますか？', a: 'SNSで紹介する場合は、事前に掲載可否を確認します。許可なく公開することはありません。' },
  { q: '家族が複数写っていても大丈夫ですか？', a: '写真の内容によって対応できる場合があります。まずは応募時に、どんな写真か教えてください。' },
  { q: '追加で作品を作れますか？', a: 'はい。無料プレゼント後に追加制作もご相談いただけます。ご希望の方にのみご案内します。' },
]
