import { useState, useEffect, useRef } from 'react'
import type { Word } from '../types'
import { db } from '../db'

interface PlacedWord {
  wordId: string
  word: string
  clue: string
  zhClue: string
  number: number
  row: number
  col: number
  dir: 'across' | 'down'
}

interface Cell {
  row: number
  col: number
  letter: string
  wordId: string
  number?: number
  clue?: string
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

function placeWords(words: Word[]): { grid: Cell[][]; placed: PlacedWord[]; clues: { across: PlacedWord[]; down: PlacedWord[] } } {
  const selected = shuffle(words).slice(0, 5)
  const size = 12
  const grid: (Cell | null)[][] = Array.from({ length: size }, () => Array(size).fill(null))
  const placed: PlacedWord[] = []

  // Sort by length descending
  const sorted = [...selected].sort((a, b) => b.word.length - a.word.length)

  for (const w of sorted) {
    const word = w.word.toLowerCase()
    const clue = w.definitions[0]?.en || w.word
    const zhClue = w.definitions[0]?.zh || ''
    let best: { row: number; col: number; dir: 'across' | 'down' } | null = null

    if (placed.length === 0) {
      best = { row: Math.floor(size / 2), col: Math.floor((size - word.length) / 2), dir: 'across' }
    } else {
      for (const pw of shuffle(placed)) {
        for (let i = 0; i < word.length; i++) {
          const letter = word[i]
          for (let j = 0; j < pw.word.length; j++) {
            if (pw.word[j] === letter) {
              if (pw.dir === 'down') {
                const row = pw.row + j
                const col = pw.col - i
                if (canPlace(grid, word, row, col, 'across', size)) {
                  best = { row, col, dir: 'across' }
                  break
                }
              } else {
                const row = pw.row - i
                const col = pw.col + j
                if (canPlace(grid, word, row, col, 'down', size)) {
                  best = { row, col, dir: 'down' }
                  break
                }
              }
            }
          }
          if (best) break
        }
        if (best) break
      }
    }

    if (!best) {
      best = { row: 2, col: size - word.length - 1, dir: 'across' }
      if (best.col < 0) best.col = 0
    }

    const pw: PlacedWord = {
      wordId: w.id, word, clue, zhClue, number: 0,
      row: best.row, col: best.col, dir: best.dir,
    }
    placed.push(pw)

    for (let i = 0; i < word.length; i++) {
      const r = best.dir === 'across' ? best.row : best.row + i
      const c = best.dir === 'across' ? best.col + i : best.col
      grid[r][c] = { row: r, col: c, letter: word[i], wordId: w.id }
    }
  }

  // Assign numbers and clues
  const across: PlacedWord[] = []
  const down: PlacedWord[] = []
  let num = 1
  const numbered = new Set<string>()

  for (const pw of placed) {
    if (!numbered.has(`${pw.row},${pw.col}`)) {
      numbered.add(`${pw.row},${pw.col}`)
      const cell = grid[pw.row][pw.col]
      if (cell) cell.number = num
      pw.number = num
      num++
    }
    if (pw.dir === 'across') across.push(pw)
    else down.push(pw)
  }

  // Build Cell[][] without nulls
  const result: Cell[][] = []
  for (let r = 0; r < size; r++) {
    const row: Cell[] = []
    for (let c = 0; c < size; c++) {
      row.push(grid[r][c] || { row: r, col: c, letter: '', wordId: '' })
    }
    result.push(row)
  }

  return { grid: result, placed, clues: { across, down } }
}

function canPlace(g: (Cell | null)[][], word: string, row: number, col: number, dir: 'across' | 'down', size: number): boolean {
  for (let i = 0; i < word.length; i++) {
    const r = dir === 'across' ? row : row + i
    const c = dir === 'across' ? col + i : col
    if (r < 0 || r >= size || c < 0 || c >= size) return false
    const existing = g[r][c]
    if (existing && existing.letter !== word[i]) return false
  }
  return true
}

export default function Crossword({ onBack }: { onBack: () => void }) {
  const [game, setGame] = useState<{ grid: Cell[][]; placed: PlacedWord[]; clues: { across: PlacedWord[]; down: PlacedWord[] } } | null>(null)
  const [inputs, setInputs] = useState<Map<string, string>>(new Map())
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null)
  const [showHints, setShowHints] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    async function load() {
      const reviews = await db.reviews.toArray()
      const studyingIds = reviews.filter(r =>
        r.status !== 'new' && r.status !== 'mastered'
      ).map(r => r.wordId)
      const allWords = await db.words.toArray()
      const studying = allWords.filter(w => studyingIds.includes(w.id))
      setGame(placeWords(studying.length >= 3 ? studying : allWords))
    }
    load()
  }, [])

  useEffect(() => {
    if (activeCell) inputRef.current?.focus()
  }, [activeCell])

  function handleCellClick(row: number, col: number) {
    if (!game) return
    const cell = game.grid[row][col]
    if (!cell || !cell.letter) return
    setActiveCell({ row, col })
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!activeCell || !game) return
    const key = e.key.toLowerCase()
    if (key === 'backspace') {
      const k = `${activeCell.row},${activeCell.col}`
      const newInputs = new Map(inputs)
      if (newInputs.get(k)) {
        newInputs.set(k, '')
        setInputs(newInputs)
      }
      // Move to previous cell
      const { row, col } = activeCell
      for (let c = col - 1; c >= 0; c--) {
        if (game.grid[row][c]?.letter) {
          setActiveCell({ row, col: c })
          return
        }
      }
      return
    }
    if (key === 'enter' || key === 'tab') return
    if (!/^[a-z]$/.test(key)) return

    const k = `${activeCell.row},${activeCell.col}`
    const newInputs = new Map(inputs)
    newInputs.set(k, key)
    setInputs(newInputs)

    // Auto advance to next cell in same row (across)
    const { row, col } = activeCell
    for (let c = col + 1; c < game.grid[row].length; c++) {
      if (game.grid[row][c]?.letter) {
        setActiveCell({ row, col: c })
        // Check win
        checkWin(newInputs)
        return
      }
    }

    // Check win
    checkWin(newInputs)
  }

  function checkWin(inputs: Map<string, string>) {
    if (!game) return
    let allCorrect = true
    for (const pw of game.placed) {
      for (let i = 0; i < pw.word.length; i++) {
        const r = pw.dir === 'across' ? pw.row : pw.row + i
        const c = pw.dir === 'across' ? pw.col + i : pw.col
        const k = `${r},${c}`
        if (inputs.get(k) !== pw.word[i]) { allCorrect = false; break }
      }
      if (!allCorrect) break
    }
    if (allCorrect) setDone(true)
  }

  if (!game) {
    return (
      <div className="page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <p style={{ color: 'var(--text-secondary)' }}>准备中...</p>
      </div>
    )
  }

  // Find grid bounds (non-empty cells)
  let minR = game.grid.length, maxR = 0, minC = game.grid[0].length, maxC = 0
  for (let r = 0; r < game.grid.length; r++) {
    for (let c = 0; c < game.grid[r].length; c++) {
      if (game.grid[r][c].letter) {
        minR = Math.min(minR, r)
        maxR = Math.max(maxR, r)
        minC = Math.min(minC, c)
        maxC = Math.max(maxC, c)
      }
    }
  }

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={onBack}>← 返回</button>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>🧩 填字游戏</h2>
        <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{game.placed.length} 个词</div>
      </div>

      <input
        ref={inputRef}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
        onKeyDown={handleKeyDown}
        autoFocus
      />

      {/* Grid */}
      <div className="card" style={{ padding: 8, marginBottom: 12, overflow: 'auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${maxC - minC + 1}, 36px)`,
          gap: 1,
          margin: '0 auto',
          width: 'fit-content',
        }}>
          {Array.from({ length: maxR - minR + 1 }, (_, ri) => {
            const r = minR + ri
            return Array.from({ length: maxC - minC + 1 }, (_, ci) => {
              const c = minC + ci
              const cell = game.grid[r][c]
              if (!cell.letter) {
                return <div key={`${r}-${c}`} style={{ width: 36, height: 36, background: '#E0E0E0', borderRadius: 2 }} />
              }
              const val = inputs.get(`${r},${c}`) || ''
              const isActive = activeCell?.row === r && activeCell?.col === c
              const correct = val === cell.letter
              const wrong = val && val !== cell.letter
              return (
                <div
                  key={`${r}-${c}`}
                  onClick={() => handleCellClick(r, c)}
                  style={{
                    width: 36, height: 36,
                    background: isActive ? '#E8F5E9' : wrong ? '#FFEBEE' : 'white',
                    border: `2px solid ${isActive ? 'var(--green)' : wrong ? 'var(--red)' : '#DDD'}`,
                    borderRadius: 3,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', cursor: 'pointer',
                    fontSize: 16, fontWeight: 700,
                    color: correct ? 'var(--green)' : wrong ? 'var(--red)' : 'var(--text)',
                  }}
                >
                  {val}
                  {cell.number && (
                    <span style={{
                      position: 'absolute', top: 1, left: 2,
                      fontSize: 9, color: 'var(--text-light)', fontWeight: 400,
                    }}>
                      {cell.number}
                    </span>
                  )}
                </div>
              )
            })
          })}
        </div>
      </div>

      {/* Clues */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>点击格子输入字母</span>
        <button
          className="btn btn-outline"
          style={{ padding: '4px 10px', fontSize: 11, borderColor: showHints ? 'var(--orange)' : '#E0E0E0' }}
          onClick={() => setShowHints(h => !h)}
        >
          💡 {showHints ? '隐藏中文提示' : '中文提示'}
        </button>
      </div>
      {game.clues.across.length > 0 && (
        <div className="card" style={{ padding: 12, marginBottom: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue)', marginBottom: 6 }}>→ 横向 (Across)</div>
          {game.clues.across.map((pw) => {
            const filled = pw.word.split('').every((_, idx) => {
              const r = pw.dir === 'across' ? pw.row : pw.row + idx
              const c = pw.dir === 'across' ? pw.col + idx : pw.col
              return inputs.get(`${r},${c}`) === pw.word[idx]
            })
            return (
              <div key={pw.wordId} style={{ marginBottom: 4, color: filled ? 'var(--green)' : 'var(--text)' }}>
                <span style={{ fontWeight: 700 }}>{pw.number}. {pw.clue}</span>
                {!filled && showHints && pw.zhClue && (
                  <span style={{ marginLeft: 6, fontSize: 12, color: 'var(--orange)' }}>（{pw.zhClue}）</span>
                )}
                {filled && <span style={{ marginLeft: 6, fontSize: 12, color: 'var(--green)' }}>✓ {pw.word}</span>}
              </div>
            )
          })}
        </div>
      )}
      {game.clues.down.length > 0 && (
        <div className="card" style={{ padding: 12, marginBottom: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--pink)', marginBottom: 6 }}>↓ 纵向 (Down)</div>
          {game.clues.down.map((pw) => {
            const filled = pw.word.split('').every((_, idx) => {
              const r = pw.dir === 'across' ? pw.row : pw.row + idx
              const c = pw.dir === 'across' ? pw.col + idx : pw.col
              return inputs.get(`${r},${c}`) === pw.word[idx]
            })
            return (
              <div key={pw.wordId} style={{ marginBottom: 4, color: filled ? 'var(--green)' : 'var(--text)' }}>
                <span style={{ fontWeight: 700 }}>{pw.number}. {pw.clue}</span>
                {!filled && showHints && pw.zhClue && (
                  <span style={{ marginLeft: 6, fontSize: 12, color: 'var(--orange)' }}>（{pw.zhClue}）</span>
                )}
                {filled && <span style={{ marginLeft: 6, fontSize: 12, color: 'var(--green)' }}>✓ {pw.word}</span>}
              </div>
            )
          })}
        </div>
      )}

      {done && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
        }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, textAlign: 'center', maxWidth: 300 }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🧩</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>填字完成！</h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>全部单词都填对了！</p>
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
