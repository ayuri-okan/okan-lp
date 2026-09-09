import { gifts } from '../data'
import { ApplyButton, InstaButton } from '../components/Buttons'
import { Gift } from '../lib/icons'

export function Present() {
  return (
    <section className="present section" id="present">
      <div className="present-art">
        <img src="/img/okan-camera.png" alt="カメラを持って写真を撮るオカン。" width="1280" height="1280" />
        <span className="choose-badge">好きな1つを<br /><b>選べる！</b></span>
      </div>
      <div className="present-copy">
        <div className="campaign-pill"><Gift />初めての方・応募者全員</div>
        <h2>4つから選べる<br /><em>無料プレゼント</em></h2>
        <p>お気に入りの家族写真と、小さなエピソードを送るだけ。下の4つから、あなたが残したい作品を1つ選べます。</p>
        <div className="gift-options">
          {gifts.map(g => (
            <span key={g.key}><b>{g.emoji} {g.name}</b><small>{g.unit}</small></span>
          ))}
        </div>
        <div className="free-points">
          <span><b>0円</b>費用はかかりません</span>
          <span><b>選べる</b>好きな作品を1つ</span>
          <span><b>1分</b>フォームで応募</span>
        </div>
        <div className="present-buttons"><InstaButton /><ApplyButton /></div>
        <small className="conditions">※応募期間・対象・制作内容などの最新条件はInstagramのキャンペーン投稿でご案内します。</small>
      </div>
    </section>
  )
}
