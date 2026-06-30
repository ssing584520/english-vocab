import { useState, useEffect } from 'react'
import type { Word } from '../types'
import { db } from '../db'

interface Card {
  id: string
  text: string
  type: 'en' | 'zh'
  pairId: string
  flipped: boolean
  matched: boolean
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

export default function WordMatch({ onBack }: { onBack: () => void }) {
  const [cards, setCards] = useState<Card[]>([])
  const [flipped, setFlipped] = useState<string[]>([])
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    async function load() {
      const reviews = await db.reviews.toArray()
      const studyingIds = reviews.filter(r =>
        r.status !== 'new' && r.status !== 'mastered'
      ).map(r => r.wordId)
      const allWords = await db.words.toArray()
      const studying = allWords.filter(w => studyingIds.includes(w.id))
      const words = studying.length >= 3 ? studying : allWords
      const pick = shuffle(words).slice(0, 6)
      const deck: Card[] = []
      pick.forEach(w => {
        const zh = w.definitions[0]?.zh || w.word
        deck.push({ id: `en-${w.id}`, text: w.word, type: 'en', pairId: w.id, flipped: false, matched: false })
        deck.push({ id: `zh-${w.id}`, text: zh, type: 'zh', pairId: w.id, flipped: false, matched: false })
      })
      setCards(shuffle(deck))
    }
    load()
  }, [])

  function handleFlip(cardId: string) {
    if (flipped.length >= 2) return
    const card = cards.find(c => c.id === cardId)
    if (!card || card.flipped || card.matched) return

    setCards(cs => cs.map(c => c.id === cardId ? { ...c, flipped: true } : c))
    const newFlipped = [...flipped, cardId]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(m => m + 1)
      const [first, second] = newFlipped.map(id => cards.find(c => c.id === id)!)
      if (first.pairId === second.pairId && first.type !== second.type) {
        setScore(s => s + 1)
        setCards(cs => cs.map(c => c.pairId === first.pairId ? { ...c, matched: true } : c))
        setFlipped([])
        // Check win
        setTimeout(() => {
          setCards(cs => {
            if (cs.every(c => c.matched)) setDone(true)
            return cs
          })
        }, 300)
      } else {
        setTimeout(() => {
          setCards(cs => cs.map(c => newFlipped.includes(c.id) ? { ...c, flipped: false } : c))
          setFlipped([])
        }, 800)
      }
    }
  }

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={onBack}>← 返回</button>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🃏 单词消消乐</h2>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--pink)' }}>{score}/6</div>
      </div>

      <div className="card" style={{ padding: 8, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: 13, color: 'var(--text-secondary)' }}>
          <span>步数: {moves}</span>
          <span>配对: {score}/6</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {cards.map(card => {
          const show = card.flipped || card.matched
          return (
            <button
              key={card.id}
              onClick={() => handleFlip(card.id)}
              style={{
                aspectRatio: '1', borderRadius: 14, border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', fontSize: card.matched ? 12 : 14,
                fontWeight: card.type === 'en' ? 800 : 600,
                background: card.matched
                  ? 'linear-gradient(135deg, #E8F5E9, #C8E6C9)'
                  : show
                    ? card.type === 'en' ? '#F3E5F5' : '#E3F2FD'
                    : 'linear-gradient(135deg, #CE93D8, #7E57C2)',
                color: show ? (card.type === 'en' ? '#7B1FA2' : '#1565C0') : 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 6, boxShadow: show ? 'none' : '0 2px 8px rgba(126,87,194,0.3)',
                transition: 'all 0.2s',
                opacity: card.matched ? 0.6 : 1,
              }}
            >
              {show ? card.text : '✨'}
            </button>
          )
        })}
      </div>

      {done && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
        }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, textAlign: 'center', maxWidth: 300 }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎉</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>全部配对成功！</h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>用了 {moves} 步完成</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={onBack}>返回</button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => window.location.reload()}>再来一局</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
