import { storeItems, storeItemUrl, storeItemImage, lineStoreAuthorUrl, portfolioUrl } from '../data'
import { ArrowRight, Sparkles } from '../lib/icons'

export function Store() {
  return (
    <section className="store section" id="store">
      <div className="kicker">ON SALE NOW</div>
      <h2>オカン。は、<br /><em>もう売ってます。</em></h2>
      <p className="lead">
        LINEスタンプはぜんぶで49作品。<br />
        今日から、あなたのトークでオカン。が喋りだします。
      </p>

      <ul className="store-grid">
        {storeItems.map(item => (
          <li key={item.id}>
            <a href={storeItemUrl(item.id)} target="_blank" rel="noopener noreferrer">
              <img
                src={storeItemImage(item.id)}
                alt={`LINEスタンプ「${item.name}」`}
                width={240}
                height={240}
                loading="lazy"
                decoding="async"
              />
              <b>{item.name}</b>
              <small>{item.note}</small>
            </a>
          </li>
        ))}
      </ul>

      <div className="store-links">
        <a className="store-btn primary" href={lineStoreAuthorUrl} target="_blank" rel="noopener noreferrer">
          <span><small>LINE STORE・全49作品</small>スタンプを全部見る</span>
          <ArrowRight />
        </a>
        <a className="store-btn" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
          <Sparkles />
          <span><small>作品ギャラリー</small>STAMP PALETTE</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  )
}
