import { ArrowRight, Camera, Sparkles } from '../lib/icons'

export function Memory() {
  return (
    <section className="memory section" id="memory">
      <div className="kicker">YOUR EVERYDAY IS A TREASURE</div>
      <h2>その写真、<em>撮るだけで<br />終わっていませんか？</em></h2>
      <p className="lead">写真を作品にすると、家族の思い出がもっと身近で、もっと特別なものになります。</p>
      <div className="transform">
        <div className="transform-card">
          <Camera /><b>スマホの中の1枚</b><span>見返さなくなった写真が…</span>
        </div>
        <div className="transform-arrow"><span>オカン。の魔法</span><ArrowRight /></div>
        <div className="transform-card after">
          <Sparkles /><b>家族だけの作品に</b><span>毎日使えて、ずっと残る！</span>
        </div>
      </div>
    </section>
  )
}
