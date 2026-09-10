import { worldLinks, charaParkUrl, gakuenUrl } from '../data'
import { ArrowRight } from '../lib/icons'

export function World() {
  return (
    <section className="world section" id="world">
      <div className="kicker">THE WORLD CONTINUES</div>
      <h2>オカン。の世界は、<br /><em>まだ続きます。</em></h2>
      <p className="lead">気になった入口から、どうぞ。途中から入ってもかまいません。</p>

      <ul className="world-grid">
        {worldLinks.map(w => (
          <li key={w.id}>
            <a href={w.url} target="_blank" rel="noopener noreferrer">
              <img className="world-thumb" src={w.thumb} alt={w.thumbAlt}
                   width={720} height={405} loading="lazy" decoding="async" />
              <span className="world-kicker"><span aria-hidden="true">{w.emoji}</span>{w.kicker}</span>
              <b>{w.title}</b>
              <p>{w.text}</p>
              <span className="world-go">見にいく <ArrowRight /></span>
            </a>
          </li>
        ))}
      </ul>

      <p className="world-more">
        <a href={charaParkUrl} target="_blank" rel="noopener noreferrer">キャラ図鑑・イベントの全体案内</a>
        <span aria-hidden="true">／</span>
        <a href={gakuenUrl} target="_blank" rel="noopener noreferrer">自分でも作ってみたい人はキャラパレ学園へ</a>
      </p>
    </section>
  )
}
