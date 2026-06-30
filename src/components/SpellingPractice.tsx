import { useState, useEffect } from 'react'
import { db } from '../db'
import type { Word, ReviewRecord } from '../types'
import { speakWord } from '../tts'
import { updateReviewRecord } from '../srs'

interface Props {
  onBack: () => void
  bookId: string
}

export default function SpellingPractice({ onBack, bookId }: Props) {
  const [words, setWords] = useState<Word[]>([])
  const [reviews, setReviews] = useState<Map<string, ReviewRecord>>(new Map())
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null)
  const [stats, setStats] = useState({ correct: 0, wrong: 0 })

  useEffect(() => {
    async function load() {
      const allReviews = await db.reviews.toArray()
      const studyingIds = allReviews.filter(r =>
        r.status !== 'new' && r.status !== 'mastered' && r.bookId === bookId
      ).map(r => r.wordId)
      const allWords = await db.words.toArray()
      let pool = allWords.filter(w => studyingIds.includes(w.id))
      if (pool.length < 5) pool = allWords
      const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 20)
      setWords(shuffled)
      const bookReviews = allReviews.filter(r => r.bookId === bookId)
      const reviewMap = new Map(bookReviews.map(r => [r.wordId, r]))
      setReviews(reviewMap)
    }
    load()
  }, [])

  const current = words[index]

  async function handleCheck() {
    if (!current) return
    const correct = input.trim().toLowerCase() === current.word.toLowerCase()
    setResult(correct ? 'correct' : 'wrong')
    if (correct) setStats(s => ({ ...s, correct: s.correct + 1 }))
    else setStats(s => ({ ...s, wrong: s.wrong + 1 }))

    const review = reviews.get(current.id)
    if (review) {
      const updated = updateReviewRecord(review, correct)
      await db.reviews.put(updated)
      setReviews(m => new Map(m.set(current.id, updated)))
    }
    await db.dictations.add({
      wordId: current.id,
      date: Date.now(),
      correct,
    })
  }

  function handleNext() {
    setResult(null)
    setInput('')
    if (index < words.length - 1) {
      setIndex(i => i + 1)
    } else {
      onBack()
    }
  }

  if (!current) {
    return (
      <div className="page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
        <p style={{ color: 'var(--text-secondary)' }}>加载中...</p>
      </div>
    )
  }

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={onBack}>← 返回</button>
        <h2 style={{ fontSize: 18, fontWeight: 800 }}>✏️ 拼写练习</h2>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{index + 1}/{words.length}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16, fontSize: 14 }}>
        <span style={{ color: 'var(--green)' }}>✅ {stats.correct}</span>
        <span style={{ color: 'var(--red)' }}>❌ {stats.wrong}</span>
      </div>

      <div className="card" style={{ textAlign: 'center', padding: 24, marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 8 }}>
          看中文意思，拼写出正确的英文单词
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--purple)', marginBottom: 12 }}>
          {current.definitions[0]?.zh || current.definitions[0]?.en}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12, cursor: 'pointer' }}
          onClick={() => speakWord(current.word).catch(() => {})}>
          🔊 {current.phonetic || ''}
        </div>

        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !result && input.trim() && handleCheck()}
          autoFocus
          placeholder="输入英文单词..."
          style={{
            width: '100%', padding: '12px 16px', fontSize: 24,
            textAlign: 'center', border: `3px solid ${result === 'correct' ? 'var(--green)' : result === 'wrong' ? 'var(--red)' : '#F0E8F5'}`,
            borderRadius: 12, fontFamily: 'inherit', fontWeight: 700,
            outline: 'none', marginBottom: 8, boxSizing: 'border-box',
            color: result === 'wrong' ? 'var(--red)' : 'var(--text)',
            background: result === 'correct' ? '#F0FFF0' : result === 'wrong' ? '#FFF0F0' : 'white',
          }}
          readOnly={!!result}
        />
        {result === 'correct' && (
          <div style={{ fontSize: 16, color: 'var(--green)', fontWeight: 700, marginTop: 4 }}>
            ✅ 正确！太棒了！
          </div>
        )}
        {result === 'wrong' && (
          <div style={{ fontSize: 16, color: 'var(--green)', fontWeight: 700 }}>
            正确答案：{current.word}
          </div>
        )}
      </div>

      {!result && (
        <button
          className="btn btn-primary"
          style={{ width: '100%', padding: '14px 0', fontSize: 16 }}
          onClick={handleCheck}
          disabled={!input.trim()}
        >
          ✅ 检查
        </button>
      )}

      {result && (
        <button
          className="btn btn-primary"
          style={{ width: '100%', padding: '14px 0', fontSize: 16 }}
          onClick={handleNext}
        >
          {index < words.length - 1 ? '下一个 →' : '完成 🎉'}
        </button>
      )}
    </div>
  )
}
