import { instagramHandle } from '../data'
import { InstaButton } from '../components/Buttons'
import { Gift, Heart, Sparkles } from '../lib/icons'

export function Follow() {
  return (
    <section className="follow section" id="follow">
      <div className="follow-inner">
        <div className="follow-image">
          <img src="/img/okan-family.png" alt="仲良く写真を撮るオカン。とムスコ" width="1280" height="1280" />
          <span>見るだけでも<br />大歓迎です！</span>
        </div>
        <div className="follow-copy">
          <div className="kicker">FOLLOW OKAN.</div>
          <h2>このオカン。<br /><em>なんか好き。</em></h2>
          <p>そう思ったら、もう仲間。作品例、家族あるある、制作の裏側、オカン。とムスコの日常を楽しく発信しています。</p>
          <ul>
            <li><Heart />家族の笑顔と、ちょっと笑える日常</li>
            <li><Sparkles />写真から作品が生まれるBefore / After</li>
            <li><Gift />フォロワー参加型の無料企画</li>
          </ul>
          <InstaButton />
          <p className="handle">{instagramHandle}</p>
        </div>
      </div>
    </section>
  )
}
