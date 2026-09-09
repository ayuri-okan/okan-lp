import { flow, formFallbackNote, lineUrl } from '../data'
import { ApplyButton, InstaButton } from '../components/Buttons'
import { Camera, Gift, InstagramIcon, Send, Sparkles } from '../lib/icons'

const visuals = [<InstagramIcon />, <Gift />, <Send />, <Camera />, <Sparkles />]

export function Flow() {
  return (
    <section className="flow section" id="flow">
      <div className="kicker">5 EASY STEPS</div>
      <h2>無料プレゼントの<br /><em>受け取り方</em></h2>
      <p className="lead">むずかしい手続きはありません。スマホだけで応募できます。</p>
      <ol className="flow-list">
        {flow.map((s, i) => (
          <li key={s.no}>
            <div className="flow-num"><small>STEP</small>{s.no}</div>
            <div className="flow-copy">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span>{s.badge}</span>
            </div>
            <div className="flow-visual">{visuals[i]}</div>
          </li>
        ))}
      </ol>
      <div className="flow-cta">
        <p>
          <b>好きな作品を1つ選んで、写真とエピソードを送るだけ。</b><br />
          無料だけのご応募も大歓迎です。
        </p>
        <div><InstaButton /><ApplyButton /></div>
        {lineUrl && <a className="flow-fallback" href="#apply">{formFallbackNote}</a>}
      </div>
    </section>
  )
}
