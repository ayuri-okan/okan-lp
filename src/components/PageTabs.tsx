/**
 * ページ切り替えタブ。
 * スマホではヘッダーのセクションナビが隠れるため、これが唯一のページ間移動手段になる。
 */
export function PageTabs({ current }: { current: 'top' | 'okanchi' }) {
  return (
    <nav className="page-tabs" aria-label="ページ切り替え">
      <a href="/" className={current === 'top' ? 'is-current' : undefined}
         aria-current={current === 'top' ? 'page' : undefined}>
        トップ
      </a>
      <a href="/okanchi/" className={current === 'okanchi' ? 'is-current' : undefined}
         aria-current={current === 'okanchi' ? 'page' : undefined}>
        オカン。ち
      </a>
    </nav>
  )
}
