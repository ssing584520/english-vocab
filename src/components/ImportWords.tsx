import { useState, useRef } from 'react'
import { db } from '../db'
import { createReviewRecord } from '../srs'
import type { Word } from '../types'

interface Props {
  onBack: () => void
}

export default function ImportWords({ onBack }: Props) {
  const [text, setText] = useState('')
  const [bookName, setBookName] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function parseWords(input: string): { word: string }[] {
    return input
      .split(/[\n,，、\s]+/)
      .map(w => w.trim())
      .filter(w => w.length > 0 && /^[a-zA-Z]+$/.test(w))
      .map(w => ({ word: w.toLowerCase() }))
  }

  async function handleImport() {
    if (!text.trim()) {
      setStatus('⚠️ 请先输入或粘贴单词')
      return
    }
    const name = bookName.trim() || `导入词书 ${new Date().toLocaleDateString()}`
    setImporting(true)
    setStatus(null)

    try {
      const items = parseWords(text)
      if (items.length === 0) {
        setStatus('⚠️ 没有找到有效的英文单词')
        setImporting(false)
        return
      }

      const existingWords = await db.words.toArray()
      const existingMap = new Map(existingWords.map(w => [w.word, w]))

      const newWords: Word[] = []
      const wordIds: string[] = []

      for (const item of items) {
        const existing = existingMap.get(item.word)
        if (existing) {
          if (!wordIds.includes(existing.id)) wordIds.push(existing.id)
        } else {
          const word: Word = {
            id: `import-${Date.now()}-${item.word}`,
            word: item.word,
            syllables: [item.word],
            partOfSpeech: '',
            definitions: [{ en: item.word }],
            examples: [],
            tags: ['导入'],
          }
          newWords.push(word)
        }
      }

      if (newWords.length > 0) {
        await db.words.bulkAdd(newWords)
        newWords.forEach(w => wordIds.push(w.id))
      }

      const bookId = `book-import-${Date.now()}`
      await db.wordBooks.add({
        id: bookId,
        name,
        description: `导入 ${wordIds.length} 个单词`,
        wordIds,
        createdAt: Date.now(),
      })

      const reviews = wordIds.map(wid => createReviewRecord(wid, bookId))
      await db.reviews.bulkAdd(reviews)

      setStatus(`✅ 成功导入词书「${name}」，共 ${wordIds.length} 个单词`)
      setText('')
      setBookName('')
    } catch (err) {
      setStatus(`❌ 导入失败: ${err instanceof Error ? err.message : '未知错误'}`)
    }
    setImporting(false)
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setText(reader.result as string)
    }
    reader.readAsText(file)
  }

  return (
    <div className="page">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={onBack}>← 返回</button>
        <h2 style={{ fontSize: 18, fontWeight: 800 }}>📥 导入词书</h2>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>词书名称</label>
        <input
          type="text"
          value={bookName}
          onChange={e => setBookName(e.target.value)}
          placeholder="如：人教版三年级上册"
          style={{
            width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)',
            border: '2px solid #F0E8F5', fontFamily: 'inherit', fontSize: 14,
            outline: 'none', marginBottom: 12,
          }}
        />

        <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>
          单词列表（每行一个，或用空格/逗号分隔）
        </label>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={`apple\nbanana\ncat\ndog\nelephant`}
          style={{
            width: '100%', minHeight: 180, padding: '10px 14px',
            borderRadius: 'var(--radius-sm)', border: '2px solid #F0E8F5',
            fontFamily: 'inherit', fontSize: 14, outline: 'none',
            resize: 'vertical', lineHeight: 1.6,
          }}
        />

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="btn btn-secondary" style={{ fontSize: 13 }} onClick={() => fileRef.current?.click()}>
            📂 从文件导入
          </button>
          <input ref={fileRef} type="file" accept=".txt,.csv" style={{ display: 'none' }} onChange={handleFileUpload} />
        </div>
      </div>

      <button
        className="btn btn-primary"
        style={{ width: '100%', padding: '14px 0', fontSize: 16 }}
        onClick={handleImport}
        disabled={importing}
      >
        {importing ? '⏳ 导入中...' : '📥 导入词书'}
      </button>

      {status && (
        <div className="card" style={{ marginTop: 12, padding: 14, fontSize: 14, textAlign: 'center' }}>
          {status}
        </div>
      )}
    </div>
  )
}
