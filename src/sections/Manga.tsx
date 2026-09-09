import { mangaPages } from '../data'
import { ApplyButton } from '../components/Buttons'
import { Sparkles } from '../lib/icons'

export function Manga() {
  return (
    <section className="manga section" id="manga">
      <div className="kicker">A SHORT STORY</div>
      <h2>写真が作品になると、<br /><em>どうなるか。</em></h2>
      <p className="lead">1分で読める、オカン。とムスコの話です。</p>

      <ol className="manga-grid">
        {mangaPages.map(p => (
          <li key={p.no}>
            <img src={p.src} alt={p.alt} width={896} height={1200} loading="lazy" decoding="async" />
            <span className="manga-no" aria-hidden="true">{p.no}</span>
          </li>
        ))}
        <li className="manga-cta">
          <Sparkles />
          <b>つづきは、<br />あなたの写真で。</b>
          <p>お気に入りの1枚と、そのときの話を送るだけ。費用はかかりません。</p>
          <ApplyButton />
        </li>
      </ol>
    </section>
  )
}
