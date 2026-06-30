import { useState } from 'react'
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

  if (mode === 'spelling') return <SpellingPractice onBack={() => setMode(null)} />
  if (mode === 'dictation') return <Dictation onBack={() => setMode(null)} />
  if (mode === 'match') return <WordMatch onBack={() => setMode(null)} />
  if (mode === 'crossword') return <Crossword onBack={() => setMode(null)} />

  return (
    <div className="page">
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>✏️ 练习</h2>

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

// Handwriting canvas component
function HandwritingPractice({ onBack }: { onBack: () => void }) {
  const [lines, setLines] = useState<{ x: number; y: number }[][]>([])
  const [currentLine, setCurrentLine] = useState<{ x: number; y: number }[]>([])

  function handlePointerDown(e: React.PointerEvent) {
    const rect = e.currentTarget.getBoundingClientRect()
    setCurrentLine([{ x: e.clientX - rect.left, y: e.clientY - rect.top }])
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (currentLine.length === 0) return
    const rect = e.currentTarget.getBoundingClientRect()
    setCurrentLine(l => [...l, { x: e.clientX - rect.left, y: e.clientY - rect.top }])
  }

  function handlePointerUp() {
    if (currentLine.length > 0) {
      setLines(l => [...l, currentLine])
      setCurrentLine([])
    }
  }

  function clear() {
    setLines([])
    setCurrentLine([])
  }

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={onBack}>
          ← 返回
        </button>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>✍️ 书写练习</h2>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={clear}>
          🗑️ 清除
        </button>
      </div>

      <div className="card" style={{ padding: 4 }}>
        <div
          style={{
            width: '100%', height: 300, background: '#FFF8FC',
            borderRadius: 12, cursor: 'crosshair', touchAction: 'none',
            position: 'relative',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {lines.map((line, i) => (
              <polyline
                key={i}
                points={line.map(p => `${p.x},${p.y}`).join(' ')}
                fill="none"
                stroke="var(--pink)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
            {currentLine.length > 1 && (
              <polyline
                points={currentLine.map(p => `${p.x},${p.y}`).join(' ')}
                fill="none"
                stroke="var(--pink)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
          {lines.length === 0 && currentLine.length === 0 && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', fontSize: 14, pointerEvents: 'none' }}>
              用手指或鼠标在下方书写 ✍️
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
