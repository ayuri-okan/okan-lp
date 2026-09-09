import { faqs } from '../data'
import { ApplyButton } from '../components/Buttons'
import { MessageCircle } from '../lib/icons'

export function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="kicker">QUESTIONS &amp; ANSWERS</div>
      <h2>お申し込み前の<br /><em>よくある質問</em></h2>
      <div className="faq-list">
        {faqs.map(f => (
          <details key={f.q}>
            <summary><span>Q</span>{f.q}<b>＋</b></summary>
            <div className="answer"><span>A</span><p>{f.a}</p></div>
          </details>
        ))}
      </div>
      <div className="faq-help">
        <MessageCircle />
        <div>
          <b>まだ少し気になることがありますか？</b>
          <p>応募フォームの「ひとこと」欄に「これでも作れる？」と気軽に書いてください。</p>
        </div>
        <ApplyButton />
      </div>
    </section>
  )
}
