import { useState, useEffect } from 'react'
import type { Word } from '../types'

const MODES = ['choice', 'spell'] as const
type Mode = typeof MODES[number]

interface Props {
  words: Word[]
  onComplete: () => void
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

export default function PostSessionTest({ words, onComplete }: Props) {
  const [queue, setQueue] = useState<{ word: Word; mode: Mode }[]>([])
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const [result, setResult] = useState<boolean | null>(null)
  const [stats, setStats] = useState({ correct: 0, wrong: 0, total: 0 })

  useEffect(() => {
    const items: { word: Word; mode: Mode }[] = []
    for (const w of words) {
      items.push({ word: w, mode: 'choice' })
      items.push({ word: w, mode: 'spell' })
    }
    setQueue(shuffle(items))
  }, [words])

  const current = queue[index]
  const isLast = index >= queue.length - 1
  const progress = queue.length > 0 ? (index / queue.length) * 100 : 0

  function getOptions(correct: Word): string[] {
    const others = shuffle(words.filter(w => w.id !== correct.id))
    const opts = [
      correct.definitions[0]?.zh || correct.word,
      ...others.slice(0, 3).map(w => w.definitions[0]?.zh || w.word),
    ]
    return shuffle(opts)
  }

  function handleChoice(opt: string) {
    if (result !== null) return
    setSelected(opt)
    const correct = current.word.definitions[0]?.zh || current.word.word
    const isCorrect = opt === correct
    setResult(isCorrect)
    setStats(s => ({ correct: s.correct + (isCorrect ? 1 : 0), wrong: s.wrong + (isCorrect ? 0 : 1), total: s.total + 1 }))
  }

  function handleSpellCheck() {
    if (result !== null) return
    const isCorrect = input.trim().toLowerCase() === current.word.word.toLowerCase()
    setResult(isCorrect)
    setStats(s => ({ correct: s.correct + (isCorrect ? 1 : 0), wrong: s.wrong + (isCorrect ? 0 : 1), total: s.total + 1 }))
  }

  function handleNext() {
    setResult(null)
    setInput('')
    setSelected(null)
    if (isLast) {
      onComplete()
    } else {
      setIndex(i => i + 1)
    }
  }

  if (!current) {
    return (
      <div className="page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
        <p style={{ color: 'var(--text-secondary)' }}>准备中...</p>
      </div>
    )
  }

  const options = current.mode === 'choice' ? getOptions(current.word) : []

  return (
    <div className="page">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div className="progress-bar" style={{ flex: 1 }}>
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
          {index + 1}/{queue.length}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16, fontSize: 14 }}>
        <span style={{ color: 'var(--green)' }}>✅ {stats.correct}</span>
        <span style={{ color: 'var(--red)' }}>❌ {stats.wrong}</span>
      </div>

      <div className="card" style={{ padding: 24, marginBottom: 16, minHeight: 200 }}>
        <div style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 8 }}>
          {current.mode === 'choice' ? '📖 看英文选中文' : '✏️ 看中文写英文'}
        </div>

        {current.mode === 'choice' ? (
          <>
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--pink)', marginBottom: 20, textAlign: 'center' }}>
              {current.word.word}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {options.map(opt => {
                const isCorrectOpt = opt === (current.word.definitions[0]?.zh || current.word.word)
                let bg = '#F8F0FF'
                if (result !== null) {
                  if (isCorrectOpt) bg = '#E8F5E9'
                  else if (opt === selected) bg = '#FFEBEE'
                }
                return (
                  <button
                    key={opt}
                    className="btn"
                    style={{
                      padding: '14px 10px', fontSize: 14, fontWeight: 600,
                      background: bg, border: `2px solid ${result !== null && isCorrectOpt ? 'var(--green)' : opt === selected ? 'var(--red)' : '#E0D8E8'}`,
                      borderRadius: 12, cursor: result !== null ? 'default' : 'pointer',
                      fontFamily: 'inherit',
                    }}
                    onClick={() => handleChoice(opt)}
                    disabled={result !== null}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--blue)', marginBottom: 20, textAlign: 'center' }}>
              {current.word.definitions[0]?.zh || current.word.word}
            </div>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !result && input.trim() && handleSpellCheck()}
              autoFocus
              placeholder="输入英文单词..."
              style={{
                width: '100%', padding: '12px 16px', fontSize: 22,
                textAlign: 'center', border: `3px solid ${result === true ? 'var(--green)' : result === false ? 'var(--red)' : '#F0E8F5'}`,
                borderRadius: 12, fontFamily: 'inherit', fontWeight: 700,
                outline: 'none', boxSizing: 'border-box',
                color: result === false ? 'var(--red)' : 'var(--text)',
                background: result === true ? '#F0FFF0' : result === false ? '#FFF0F0' : 'white',
              }}
              readOnly={result !== null}
            />
            {result === false && (
              <div style={{ textAlign: 'center', marginTop: 8, fontSize: 15, color: 'var(--green)', fontWeight: 700 }}>
                正确答案：{current.word.word}
              </div>
            )}
            {!result && (
              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 12, padding: '12px 0', fontSize: 15 }}
                onClick={handleSpellCheck}
                disabled={!input.trim()}
              >
                ✅ 检查
              </button>
            )}
          </>
        )}
      </div>

      {result !== null && (
        <button
          className="btn btn-primary"
          style={{ width: '100%', padding: '14px 0', fontSize: 16, background: result === true ? 'var(--green)' : undefined }}
          onClick={handleNext}
        >
          {result ? '✅ 正确！' : '❌ 继续'}
          {isLast ? '  完成 🎉' : '  下一个 →'}
        </button>
      )}
    </div>
  )
}
