import { useState } from 'react'
import type { FormEvent } from 'react'
import { gifts, formAccessKey, formEndpoint, formSubjectPrefix, instagramUrl, lineUrl, type GiftKey } from '../data'
import { CheckCircle2, Gift, InstagramIcon, Send, Sparkles } from '../lib/icons'

type Status = 'idle' | 'sending' | 'done' | 'error'

export function Apply() {
  const [gift, setGift] = useState<GiftKey | ''>('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!gift) {
      setError('ほしい作品を1つ選んでください。')
      return
    }
    setError('')
    setStatus('sending')

    if (!formAccessKey) {
      // アクセスキーが未設定のあいだは送信させず、Instagram DMへ案内する
      setStatus('error')
      setError('ただいま応募フォームを準備中です。お手数ですが InstagramのDM からご連絡ください。')
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)
    const giftName = gifts.find(g => g.key === gift)?.name ?? gift

    data.delete('gift-choice')
    data.set('希望の作品', giftName)

    // Web3Forms 用のメタ情報
    data.set('access_key', formAccessKey)
    data.set('subject', `${formSubjectPrefix}${data.get('お名前') ?? ''}さん / ${giftName}`)
    data.set('from_name', 'オカン。LP 応募フォーム')
    // Gmailでそのまま「返信」すると応募者本人に届くようにする
    const replyTo = data.get('メールアドレス')
    if (typeof replyTo === 'string') data.set('replyto', replyTo)

    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setGift('')
      setStatus('done')
    } catch {
      setStatus('error')
      setError('送信に失敗しました。時間をおいてもう一度お試しいただくか、InstagramのDMからご連絡ください。')
    }
  }

  if (status === 'done') {
    return (
      <section className="apply section" id="apply">
        <div className="apply-done">
          <Sparkles />
          <h2>応募ありがとうございます！</h2>
          <p>
            受付が完了しました。<br />
            このあと、ご入力のメールアドレス宛に<strong>写真とエピソードの送り方</strong>をご案内します。
          </p>
          <p className="apply-done-note">数日経っても届かない場合は、迷惑メールフォルダをご確認のうえ、InstagramのDMからお知らせください。</p>
          <a className="social-btn instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            <span><small>完成した作品も投稿しています</small>Instagramでフォロー</span>
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="apply section" id="apply">
      <div className="apply-head">
        <div className="campaign-pill"><Gift />応募者全員・費用0円</div>
        {lineUrl ? (
          <>
            <h2>LINEを使っていない方は<br /><em>こちらから</em></h2>
            <p className="lead">
              ふだんLINEを使わない方のための応募フォームです。入力は1分ほど。<br />
              写真は応募後にメールでご案内する送り方にそって送っていただきます。
            </p>
          </>
        ) : (
          <>
            <h2>無料プレゼントに<br /><em>応募する</em></h2>
            <p className="lead">入力は1分ほど。写真は応募後のご案内にそって送っていただきます。</p>
          </>
        )}
      </div>

      <form className="apply-form" onSubmit={handleSubmit} noValidate={false}>
        {/* Web3Forms のハニーポット。人間には見えず、ボットが埋めると弾かれる */}
        <input type="checkbox" name="botcheck" className="honeypot" tabIndex={-1} autoComplete="off" />

        <div className="field">
          <label htmlFor="name">お名前 <b>必須</b></label>
          <input id="name" name="お名前" type="text" required placeholder="ニックネームでもOKです" autoComplete="name" />
        </div>

        <div className="field">
          <label htmlFor="email">メールアドレス <b>必須</b></label>
          <input id="email" name="メールアドレス" type="email" required placeholder="okan@example.com" autoComplete="email" />
          <small>完成作品と、写真の送り方のご案内をお送りします。</small>
        </div>

        <div className="field">
          <label htmlFor="instagram">Instagramのアカウント名</label>
          <input id="instagram" name="Instagram" type="text" placeholder="@okaaan_yade" />
          <small>フォローの確認に使います。お持ちでなければ空欄で大丈夫です。</small>
        </div>

        <fieldset className="field gift-picker">
          <legend>ほしい作品を1つ選んでください <b>必須</b></legend>
          <div className="gift-cards">
            {gifts.map(g => (
              <label key={g.key} className={`gift-card${gift === g.key ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name="gift-choice"
                  value={g.key}
                  checked={gift === g.key}
                  onChange={() => { setGift(g.key); setError('') }}
                />
                <span className="gift-card-emoji" aria-hidden="true">{g.emoji}</span>
                <span className="gift-card-body">
                  <b>{g.name}<i>{g.unit}</i></b>
                  <small>{g.note}</small>
                </span>
                <span className="gift-card-check" aria-hidden="true"><CheckCircle2 /></span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="episode">どんな思い出を作品にしたいですか？ <b>必須</b></label>
          <textarea
            id="episode"
            name="エピソード"
            required
            rows={5}
            placeholder="例：3歳の息子が、ごはんを食べながら寝てしまった日のこと。口にごはん粒つけたまま、めっちゃ幸せそうな顔してました。"
          />
          <small>ひとことでも大丈夫。「これでも作れる？」というご相談もここへどうぞ。</small>
        </div>

        <fieldset className="field">
          <legend>完成作品のSNS掲載について <b>必須</b></legend>
          <div className="radio-row">
            <label><input type="radio" name="SNS掲載" value="掲載OK" required />掲載OK</label>
            <label><input type="radio" name="SNS掲載" value="相談したい" />相談したい</label>
            <label><input type="radio" name="SNS掲載" value="掲載しないでほしい" />掲載しないでほしい</label>
          </div>
          <small>「掲載しないでほしい」を選んでも、作品はそのままお届けします。</small>
        </fieldset>

        <label className="consent">
          <input type="checkbox" name="同意" value="同意済み" required />
          <span>お送りいただいた写真とエピソードを、作品制作のためだけに使うことに同意します。</span>
        </label>

        {error && <p className="form-error" role="alert">{error}</p>}

        <button className="submit-btn" type="submit" disabled={status === 'sending'}>
          <Send />
          {status === 'sending' ? '送信中…' : '無料プレゼントに応募する'}
        </button>
        <small className="conditions">※応募期間・対象・制作内容などの最新条件はInstagramのキャンペーン投稿でご案内します。</small>
      </form>
    </section>
  )
}
