import { useState, useEffect } from 'react'
import { db } from '../db'
import type { WordBook } from '../types'
import SpellingPractice from './SpellingPractice'
import Dictation from './Dictation'
import WordMatch from './WordMatch'
import Crossword from './Crossword'

const modes = [
  { key: 'spelling', label: '拼写练习', icon: '✏️', desc: '看释义拼写单词，检验记忆效果' },
  { key: 'dictation', label: '单词听写', icon: '🎧', desc: '听发音写出单词，训练听力' },
  { key: 'handwriting', label: '书写练习', icon: '✍️', desc: '用手写方式练习拼写（触屏设备）' },
  { key: 'match', label: '单词消消乐', icon: '🃏', desc: '翻牌配对，英语中文消消乐' },
  { key: 'crossword', label: '填字游戏', icon: '🧩', desc: '根据中文提示填英文单词' },
] as const

type Mode = typeof modes[number]['key']

export default function PracticeHub() {
  const [mode, setMode] = useState<Mode | null>(null)
  const [books, setBooks] = useState<WordBook[]>([])
  const [activeBookId, setActiveBookId] = useState<string | null>(null)

  useEffect(() => {
    db.wordBooks.toArray().then(bookList => {
      setBooks(bookList)
      if (bookList.length > 0) setActiveBookId(bookList[0].id)
    })
  }, [])

  if (mode === 'spelling') return <SpellingPractice onBack={() => setMode(null)} bookId={activeBookId || ''} />
  if (mode === 'dictation') return <Dictation onBack={() => setMode(null)} bookId={activeBookId || ''} />
  if (mode === 'match') return <WordMatch onBack={() => setMode(null)} bookId={activeBookId || ''} />
  if (mode === 'crossword') return <Crossword onBack={() => setMode(null)} bookId={activeBookId || ''} />

  return (
    <div className="page">
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>✏️ 练习</h2>

      {books.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          {books.map(b => (
            <button
              key={b.id}
              className={`btn ${activeBookId === b.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '6px 14px', fontSize: 12 }}
              onClick={() => setActiveBookId(b.id)}
            >
              {b.name}
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {modes.map(m => (
          <div
            key={m.key}
            className="card"
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, padding: 16 }}
            onClick={() => setMode(m.key)}
          >
            <div style={{ fontSize: 36 }}>{m.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{m.label}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{m.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
