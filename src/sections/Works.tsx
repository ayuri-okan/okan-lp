import { works } from '../data'

export function Works() {
  return (
    <section className="works section" id="works">
      <div className="kicker">WHAT WE CAN MAKE</div>
      <h2>写真1枚から、<br /><em>こんなん作れます。</em></h2>
      <div className="works-grid">
        {works.map(w => (
          <article className={`work-card ${w.accent}`} key={w.name}>
            <div className="work-title">
              <span>{w.emoji}</span>
              <div><h3>{w.name}</h3><p>{w.text}</p></div>
            </div>
            <div className="work-demo">{w.demo}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
