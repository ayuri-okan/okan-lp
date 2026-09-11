import { useMemo, useState } from 'react'
import {
  pickStoreItems, storeItemUrl, storeItemImage,
  lineStoreAuthorUrl, portfolioUrl,
} from '../data'
import { ArrowRight, Sparkles } from '../lib/icons'

export function Store() {
  // 表示のたびに顔ぶれが変わる。seed を進めると「他のも見る」で引き直せる
  const [seed, setSeed] = useState(0)
  const items = useMemo(() => pickStoreItems(8), [seed])

  return (
    <section className="store section" id="store">
      <div className="kicker">ON SALE NOW</div>
      <h2>オカン。は、<br /><em>もう売ってます。</em></h2>
      <p className="lead">
        朝のあいさつから、飲みすぎた翌朝まで。<br />
        今日から、あなたのトークでオカン。が喋りだします。
      </p>

      <ul className="store-grid">
        {items.map(item => (
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

      <button className="store-reroll" type="button" onClick={() => setSeed(s => s + 1)}>
        <Sparkles />ほかの作品も見る
      </button>

      <div className="store-links">
        <a className="store-btn primary" href={lineStoreAuthorUrl} target="_blank" rel="noopener noreferrer">
          <span><small>LINE STORE</small>スタンプを全部見る</span>
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
