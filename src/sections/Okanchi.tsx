import { familyMembers, okanchiGroupImage } from '../data/family'
import { instagramHandle, instagramUrl } from '../data'
import { ApplyButton, InstaButton } from '../components/Buttons'
import { ArrowRight, Heart, InstagramIcon, Sparkles } from '../lib/icons'

export function OkanchiHeader() {
  return (
    <header className="topbar">
      <a className="logo" href="/">
        <img src="/img/okan-logo.webp" alt="" />
        <b>オカン。</b>
        <span>家族の思い出作品室</span>
      </a>
      <nav aria-label="主要リンク">
        <a href="/">トップへもどる</a>
        <a href="#family">家族しょうかい</a>
        <a href="/#present">無料プレゼント</a>
      </nav>
    </header>
  )
}

export function OkanchiHero() {
  return (
    <section className="okanchi-hero" id="top">
      <div className="okanchi-hero-copy">
        <div className="campaign-pill"><Heart />いつも、みんなのそばに。</div>
        <h1>ようこそ、<br /><em>オカン。ちへ。</em></h1>
        <p className="hero-text">
          アフロ頭の、ちょっとにぎやかな大家族。<br />
          ごはんと笑い声がたえない、みんなのだいすきな場所です。
        </p>
      </div>
      <div className="okanchi-hero-art">
        <img
          src={okanchiGroupImage}
          alt="オカン。ちの看板の前に集まった家族全員。オトン。オカン。ムスコ。ムスメ。アカゴ。オジイ。オバア。イヌ。ネコ。"
          width={1100}
          height={1100}
        />
      </div>
    </section>
  )
}

export function FamilyList() {
  return (
    <section className="family section" id="family">
      <div className="kicker">MEET THE FAMILY</div>
      <h2>オカン。ちの<br /><em>住人たち。</em></h2>
      <p className="lead">ぜんいん、アフロです。</p>

      <div className="family-grid">
        {familyMembers.map(m => (
          <article className={`family-card ${m.accent}`} key={m.id}>
            <div className="family-top">
              <div className="family-art">
                <img src={m.src} alt={`${m.name}の立ち姿`} width={520} height={520} loading="lazy" decoding="async" />
              </div>
              <div className="family-name">
                <span className="family-role">{m.role}</span>
                <h3>{m.name}</h3>
                <p className="family-catch">{m.catch}</p>
              </div>
            </div>

            <dl className="family-spec">
              <div><dt>性格</dt><dd>{m.personality.join('・')}</dd></div>
              <div><dt>好き</dt><dd>{m.likes.join('・')}</dd></div>
              <div><dt>苦手</dt><dd>{m.dislikes.join('・')}</dd></div>
            </dl>

            <ul className="family-phrases">
              {m.phrases.slice(0, 2).map(p => <li key={p}>「{p}」</li>)}
            </ul>

            <p className="family-duty">{m.duty}</p>

            {m.manga ? (
              <figure className="family-manga">
                <img src={m.manga.src} alt={m.manga.alt} width={896} height={1200} loading="lazy" decoding="async" />
                <figcaption>オカン。と{m.name}の、ある日</figcaption>
              </figure>
            ) : (
              /* オカン。は全話に出るので専用の漫画を持たない。空白になるので一言を置く */
              <p className="family-note">
                <Heart />
                オカン。は、ほかのみんなの話に<br />ぜんぶ出てきます。
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export function OkanchiOutro() {
  return (
    <section className="okanchi-outro section">
      <Sparkles />
      <h2>あなたの家族も、<br /><em>作品になります。</em></h2>
      <p>
        オカン。ちのみんなも、はじまりは1枚の写真でした。<br />
        お気に入りの1枚と、そのときの話を送ってください。オカン。が作品にします。
      </p>
      <div className="okanchi-outro-actions">
        <InstaButton />
        <ApplyButton />
      </div>
      <a className="okanchi-back" href="/">
        無料プレゼントのページを見る <ArrowRight />
      </a>
    </section>
  )
}

export function OkanchiFooter() {
  return (
    <footer>
      <b>オカン。</b>
      <p>家族の「今」を、作品として残す。</p>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <InstagramIcon /> Instagram {instagramHandle}
      </a>
      <small>© 2026 オカン。</small>
    </footer>
  )
}
