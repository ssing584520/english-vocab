import { useState, useEffect, useRef } from 'react'
import { db } from '../db'
import type { Word } from '../types'
import { speakWord } from '../tts'
import { updateReviewRecord } from '../srs'

interface Props {
  onBack: () => void
  bookId: string
}

export default function Dictation({ onBack, bookId }: Props) {
  const [words, setWords] = useState<Word[]>([])
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [stats, setStats] = useState({ correct: 0, wrong: 0 })
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function load() {
      const allReviews = await db.reviews.toArray()
      const studyingIds = allReviews.filter(r =>
        r.status !== 'new' && r.status !== 'mastered' && r.bookId === bookId
      ).map(r => r.wordId)
      const allWords = await db.words.toArray()
      let pool = allWords.filter(w => studyingIds.includes(w.id))
      if (pool.length < 5) pool = allWords
      const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 15)
      setWords(shuffled)
    }
    load()
  }, [])

  const current = words[index]

  useEffect(() => {
    if (current) {
      speakWord(current.word, 0.6).catch(() => {})
      setTimeout(() => inputRef.current?.focus(), 500)
    }
  }, [index, current])

  function handleRepeat() {
    if (current) speakWord(current.word, 0.6).catch(() => {})
  }

  function handleSlower() {
    if (current) speakWord(current.word, 0.4).catch(() => {})
  }

  function handleCheck() {
    if (!current) return
    const correct = input.trim().toLowerCase() === current.word.toLowerCase()
    setResult(correct ? 'correct' : 'wrong')
    if (correct) setStats(s => ({ ...s, correct: s.correct + 1 }))
    else setStats(s => ({ ...s, wrong: s.wrong + 1 }))
  }

  async function handleNext() {
    if (current && result) {
      const reviews = await db.reviews.where({ wordId: current.id }).toArray()
      if (reviews.length > 0) {
        const updated = updateReviewRecord(reviews[0], result === 'correct')
        await db.reviews.put(updated)
      }
      await db.dictations.add({
        wordId: current.id,
        date: Date.now(),
        correct: result === 'correct',
      })
    }
    setResult(null)
    setInput('')
    setShowHint(false)
    if (index < words.length - 1) {
      setIndex(i => i + 1)
    } else {
      onBack()
    }
  }

  function handleSkip() {
    if (!current) return
    setInput(current.word)
    setResult('wrong')
  }

  if (!current) {
    return (
      <div className="page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎧</div>
        <p style={{ color: 'var(--text-secondary)' }}>加载中...</p>
      </div>
    )
  }

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={onBack}>← 返回</button>
        <h2 style={{ fontSize: 18, fontWeight: 800 }}>🎧 单词听写</h2>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{index + 1}/{words.length}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16, fontSize: 14 }}>
        <span style={{ color: 'var(--green)' }}>✅ {stats.correct}</span>
        <span style={{ color: 'var(--red)' }}>❌ {stats.wrong}</span>
      </div>

      <div className="card" style={{ textAlign: 'center', padding: 24, marginBottom: 16 }}>
        <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>
          听发音，写出正确的单词
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
          <button className="btn btn-secondary" onClick={handleRepeat}>🔊 再听一遍</button>
          <button className="btn btn-secondary" onClick={handleSlower}>🐢 慢速</button>
        </div>

        {showHint && (
          <div style={{ fontSize: 14, color: 'var(--purple)', marginBottom: 8, fontFamily: 'serif' }}>
            {current.phonetic || current.definitions[0]?.zh || '首字母: ' + current.word[0]}
          </div>
        )}

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !result && input.trim() && handleCheck()}
          placeholder="输入单词..."
          style={{
            width: '100%', padding: '12px 16px', fontSize: 24,
            textAlign: 'center', border: `3px solid ${result === 'correct' ? 'var(--green)' : result === 'wrong' ? 'var(--red)' : '#F0E8F5'}`,
            borderRadius: 12, fontFamily: 'inherit', fontWeight: 700,
            outline: 'none', marginBottom: 8,
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

      <div style={{ display: 'flex', gap: 8 }}>
        {!showHint && !result && (
          <button className="btn btn-outline" style={{ flex: 1, fontSize: 13 }} onClick={() => setShowHint(true)}>
            💡 提示
          </button>
        )}
        {!result && (
          <button
            className="btn btn-primary"
            style={{ flex: 1, padding: '14px 0', fontSize: 16 }}
            onClick={handleCheck}
            disabled={!input.trim()}
          >
            ✅ 检查
          </button>
        )}
      </div>

      {!result && (
        <button className="btn btn-outline" style={{ width: '100%', marginTop: 8, fontSize: 12, borderColor: 'var(--text-light)', color: 'var(--text-light)' }} onClick={handleSkip}>
          跳过这个
        </button>
      )}

      {result && (
        <button className="btn btn-primary" style={{ width: '100%', padding: '14px 0', fontSize: 16 }} onClick={handleNext}>
          {index < words.length - 1 ? '下一个 →' : '完成 🎉'}
        </button>
      )}
    </div>
  )
}
