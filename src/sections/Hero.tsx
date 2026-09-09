import { ApplyButton, InstaButton } from '../components/Buttons'
import { ArrowDown, Gift } from '../lib/icons'

const polaroids = [
  ['🤣', 'こんな笑顔も'],
  ['😴', 'この寝顔も'],
  ['😎', '変なポーズも'],
  ['👨‍👩‍👧‍👦', '家族で過ごした日も'],
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="campaign-pill"><Gift />期間限定キャンペーン</div>
        <h1>家族の「今」を、<br /><em>作品として残す。</em></h1>
        <p className="hero-text">
          何気ない毎日も、いつかかけがえのない思い出になる。<br />
          その一瞬を、LINEスタンプやイラスト、マンガ、絵本にしませんか？
        </p>
        <div className="gift-callout">
          <span>応募者全員</span>
          <strong>4つから好きな1つ〈無料〉</strong>
          <small>イラスト・ミニ絵本・ミニ漫画・LINEスタンプ8個から選べます！</small>
        </div>
        <div className="hero-actions"><InstaButton /><ApplyButton /></div>
        <a className="scroll-link" href="#memory">その写真、撮るだけで終わっていませんか？ <ArrowDown /></a>
      </div>
      <div className="hero-image">
        <div className="speech">今日もええ写真、<br />撮ろう！</div>
        <img src="/img/okan-family.png" alt="カメラを持ったオカン。と笑顔のムスコ" width="1280" height="1280" />
      </div>
      <div className="polaroids">
        {polaroids.map(([emoji, label]) => (
          <div key={label}>{emoji}<span>{label}</span></div>
        ))}
      </div>
    </section>
  )
}
