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
 * これが入っていると、サイト内の主要CTAが「LINEを友だち追加」になる。
 * null に戻すと、応募フォームへの導線に自動で切り替わる。
 */
export const lineUrl: string | null = 'https://lin.ee/qpaYcUn'

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

export type Work = {
  accent: 'green' | 'orange' | 'blue' | 'pink'
  emoji: string
  name: string
  text: string
  /** 見本画像 */
  demoSrc: string
  demoAlt: string
}

export const works: Work[] = [
  { accent: 'green', emoji: '💬', name: 'LINEスタンプ', text: '家族の会話で、毎日使える！',
    demoSrc: '/works/stamp.webp', demoAlt: '「おはようさん」「おつかれさま」など、オカン。のLINEスタンプ4個' },
  { accent: 'orange', emoji: '🎨', name: 'イラスト', text: 'お気に入りの1枚を、かわいく作品に。',
    demoSrc: '/works/illust.webp', demoAlt: '木のフレームに入った、オカン。とムスコ。の思い出イラスト' },
  { accent: 'blue', emoji: '📖', name: 'マンガ', text: '家族のエピソードを、笑える1ページに。',
    demoSrc: '/works/manga.webp', demoAlt: 'ムスコ。が「これ ぼくやん」と飛び上がるマンガのひとコマ' },
  { accent: 'pink', emoji: '📚', name: '絵本', text: '今の気持ちを、未来の宝物に。',
    demoSrc: '/works/ehon.webp', demoAlt: '見開きいっぱいに草原を歩く親子が描かれたミニ絵本' },
]

/** ヒーロー下のポラロイド。読者のスマホの中の写真を表す */
export const polaroids: { src: string; alt: string; label: string }[] = [
  { src: '/moments/smile.webp', alt: '両手をあげて大笑いしている子ども', label: 'こんな笑顔も' },
  { src: '/moments/sleep.webp', alt: 'うつ伏せで寝落ちしている子ども', label: 'この寝顔も' },
  { src: '/moments/pose.webp', alt: 'トイレットペーパーを転がして得意げな子ども', label: '変なポーズも' },
  { src: '/moments/family.webp', alt: 'オカン。ちの家族全員の集合写真', label: '家族で過ごした日も' },
]

export type Step = { no: string; title: string; text: string; badge: string }

export const flow: Step[] = [
  { no: '01', title: 'Instagramをフォロー', text: 'オカン。のInstagramをフォロー。キャンペーン投稿をチェックします。', badge: '約30秒' },
  { no: '02', title: 'LINEを友だち追加', text: 'ボタンから友だち追加。応募のご案内がLINEに届きます。', badge: '約30秒' },
  { no: '03', title: '好きなプレゼントを選ぶ', text: 'イラスト・ミニ絵本・ミニ漫画・LINEスタンプ8個から、好きな1つを選びます。', badge: '4つから選べる' },
  { no: '04', title: '写真とエピソードを送る', text: 'お気に入りの写真と、その日の小さな思い出をLINEで送ってください。', badge: 'スマホでかんたん' },
  { no: '05', title: '完成作品を受け取る', text: 'オカン。が心を込めて制作。完成した作品データをLINEでお届けします。', badge: '料金0円' },
]

/** LINEを使っていない人向けの、フォーム応募の案内文 */
export const formFallbackNote = 'LINEを使っていない方は、下のフォームからでも応募できます。'

export const moments: string[] = [
  '初めて歩いた日', '幼稚園の入園', '家族旅行', 'パパとの休日', '寝相', 'イヤイヤ期',
  '毎朝の謎ルーティン', '兄弟ゲンカ', '言い間違い', 'ごはん中に寝た日', '何気ない日常',
]

/* ---------- 販促漫画 ---------- */

export type MangaPage = { no: number; src: string; alt: string }

/** LP に埋め込む販促漫画。pages/ の生成物を public/manga/ に置いて参照する */
export const mangaPages: MangaPage[] = [
  { no: 1, src: '/manga/page01.webp', alt: 'スマホの写真一覧がびっしり並び、オカン。が「最後に見返したん いつ」と問いかける' },
  { no: 2, src: '/manga/page02.webp', alt: '写真がフォルダの奥へ沈んでいく。オカン。が「写真はこっちから見に行かんと、あの日の子には会えへんねん」と話す' },
  { no: 3, src: '/manga/page03.webp', alt: '写真1枚がLINEスタンプ・イラスト・漫画・絵本の4つに変わる図解に、ムスコが驚く' },
  { no: 4, src: '/manga/page04.webp', alt: '朝のトークに送られた似顔絵、夜は自分が主人公の絵本。オカン。が「あなたの子にも毎日会えるで」と笑う' },
  { no: 5, src: '/manga/page05.webp', alt: 'オカン。とムスコが下を指さし、緑の立て札に「LINEで まってるで」。ムスコが「ここ おしてやー」と言う' },
]

/* ---------- 販売中の作品 ---------- */

/** LINE STORE のクリエイターページ（全49作品） */
export const lineStoreAuthorUrl = 'https://store.line.me/stickershop/author/3948032/ja'

/** 作品ギャラリー（ポートフォリオ） */
export const portfolioUrl = 'https://stamp-palette.vercel.app/'

export type StoreItem = { id: string; name: string; note: string }

/** LPに並べる代表作。サムネイルは公式ストアのものを取り込んで public/store/ に置いている */
export const storeItems: StoreItem[] = [
  { id: '36404994', name: 'オカン。とムスコ。関西弁の親子', note: '親子の会話がそのまま使える' },
  { id: '36440804', name: 'オカン。とムスコ。ともちぴ。', note: 'もちぴも仲間入りした3人セット' },
  { id: '36391279', name: 'あゆとオカン。全国いくで', note: '作者・あゆとオカン。の2人旅' },
  { id: '36390622', name: 'オカン。毎日使える関西弁スタンプ', note: 'まずはこれ。朝から夜までの定番' },
  { id: '36404915', name: '無言でも圧が強いオカン。', note: '何も言うてへんのに圧がすごい' },
  { id: '36391210', name: '褒めまくるオカン。', note: 'とにかく褒める。元気が出るやつ' },
  { id: '36329224', name: 'オカン。受験生を応援するスタンプ', note: '受験の時期に効くシリーズ' },
  { id: '36440710', name: '二日酔いをいたわるオカン。', note: '飲みすぎた朝に届くやさしさ' },
]

export const storeItemUrl = (id: string) => `https://store.line.me/stickershop/product/${id}/ja`
export const storeItemImage = (id: string) => `/store/${id}.webp`

/* ---------- オカン。の世界のつづき ---------- */

export type WorldLink = {
  id: string
  kicker: string
  title: string
  text: string
  url: string
  emoji: string
}

/**
 * 本人が運営している他サイトへの導線。
 * 無料プレゼントの導線と競合しないよう、応募フォームより後ろに置く。
 */
export const worldLinks: WorldLink[] = [
  {
    id: 'toybox',
    kicker: "OKAN'S TOY BOX",
    title: 'オカンのおもちゃ箱',
    text: 'オカン。がどうして作品を作りはじめたのか。12ページの漫画になっています。3分で読めます。',
    url: 'https://okan-toybox-lp.vercel.app/',
    emoji: '🧰',
  },
  {
    id: 'ayu',
    kicker: 'MEET THE CREATOR',
    title: '作者・あゆの物語',
    text: 'オカン。を生んで育てている人のこと。ここまで来てくれたなら、ぜひ。',
    url: 'https://ayu-lp.vercel.app/',
    emoji: '🎨',
  },
  {
    id: 'palette',
    kicker: 'STAMP PALETTE',
    title: '作品ギャラリー',
    text: 'あゆの作品も、ほかのクリエイターの作品も並ぶ展示室。自分の作品を出すこともできます。',
    url: 'https://stamp-palette.vercel.app/',
    emoji: '🖼️',
  },
]

/** 世界の全体案内（公式サイト） */
export const charaParkUrl = 'https://chara-park.pages.dev/'
/** キャラづくりを学ぶ場所 */
export const gakuenUrl = 'https://charapale-gakuen.vercel.app/'

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  { q: '本当に無料ですか？', a: 'はい。応募条件を満たした方には、4種類から選んだ作品を1つ無料でプレゼントします。無料だけのご応募も大歓迎です。' },
  { q: '何をプレゼントしてもらえますか？', a: '思い出イラスト1枚・ミニ絵本1作品・ミニ漫画1作品・LINEスタンプ8個セットから、お好きな1つを選べます。' },
  { q: '誰でも応募できますか？', a: '初めて「オカン。」の無料プレゼント企画へ参加する方が対象です。最新条件はInstagramのキャンペーン投稿をご確認ください。' },
  { q: 'どんな写真を送ればいいですか？', a: 'お子さまやご家族、ペットなど、作品にしたい方が分かりやすく写っている写真がおすすめです。必要な枚数は受付後にご案内します。' },
  { q: '作品はどこに届きますか？', a: '完成作品は公式LINEでお届けします（フォームからご応募の方はメールでお届けします）。郵送ではなく、スマホに保存できるデータでのお渡しです。' },
  { q: '写真は公開されますか？', a: 'SNSで紹介する場合は、事前に掲載可否を確認します。許可なく公開することはありません。' },
  { q: '家族が複数写っていても大丈夫ですか？', a: '写真の内容によって対応できる場合があります。まずは応募時に、どんな写真か教えてください。' },
  { q: '追加で作品を作れますか？', a: 'はい。無料プレゼント後に追加制作もご相談いただけます。ご希望の方にのみご案内します。' },
]
