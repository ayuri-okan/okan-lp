export function Header() {
  return (
    <header className="topbar">
      <a className="logo" href="#top">
        <img src="/img/okan-logo.webp" alt="" />
        <b>オカン。</b>
        <span>家族の思い出作品室</span>
      </a>
      <nav aria-label="主要リンク">
        <a href="#present">無料プレゼント</a>
        <a href="#manga">まんが</a>
        <a href="#works">作れるもの</a>
        <a href="/okanchi/">オカン。ち</a>
        <a href="#store">販売中の作品</a>
        <a href="#apply">応募する</a>
      </nav>
    </header>
  )
}
