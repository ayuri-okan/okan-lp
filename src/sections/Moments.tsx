import { moments } from '../data'
import { CheckCircle2 } from '../lib/icons'

export function Moments() {
  return (
    <section className="moments section">
      <div className="kicker">LITTLE MOMENTS</div>
      <h2>こんな思い出、<br /><em>ありませんか？</em></h2>
      <div className="moment-list">
        {moments.map(m => <span key={m}><CheckCircle2 />{m}</span>)}
      </div>
      <p>
        特別なイベントじゃなくても大丈夫。<br />
        <strong>“今は普通”に感じる毎日こそ、あとから振り返ったときに宝物になります。</strong>
      </p>
    </section>
  )
}
