import { instagramUrl, lineUrl, applyAnchor } from '../data'
import { ArrowRight, InstagramIcon, MessageCircle, Send } from '../lib/icons'

export function InstaButton() {
  return (
    <a className="social-btn instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer">
      <InstagramIcon />
      <span><small>作品と楽しい日常を発信中</small>Instagramでフォロー</span>
      <ArrowRight />
    </a>
  )
}

/**
 * メインCTA。LINE公式アカウントが未開設のあいだは申し込みフォームへ、
 * data.ts の lineUrl を設定した瞬間に「LINEを友だち追加」へ切り替わる。
 */
export function ApplyButton() {
  if (lineUrl) {
    return (
      <a className="social-btn line-btn" href={lineUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        <span><small>無料プレゼントに応募する</small>LINEを友だち追加</span>
        <ArrowRight />
      </a>
    )
  }
  return (
    <a className="social-btn line-btn" href={applyAnchor}>
      <Send />
      <span><small>かんたん1分・費用0円</small>無料で応募する</span>
      <ArrowRight />
    </a>
  )
}
