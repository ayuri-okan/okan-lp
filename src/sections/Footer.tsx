import { instagramHandle, instagramUrl, lineUrl } from '../data'
import { InstagramIcon, MessageCircle, Send } from '../lib/icons'

export function Footer() {
  return (
    <footer>
      <b>オカン。</b>
      <p>家族の「今」を、作品として残す。</p>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram {instagramHandle}</a>
      <small>© 2026 オカン。</small>
    </footer>
  )
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon />フォロー</a>
      {lineUrl
        ? <a href={lineUrl} target="_blank" rel="noopener noreferrer"><MessageCircle />LINE追加</a>
        : <a href="#apply"><Send />応募する</a>}
    </div>
  )
}
