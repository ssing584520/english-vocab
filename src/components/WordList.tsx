import { useState, useEffect } from 'react'
import { db } from '../db'
import type { Word, WordBook } from '../types'
import { getWordSyllables } from '../phonics'
import WordDetail from './WordDetail'

const SYLLABLE_COLORS = ['#F5A0D0', '#5D9CEC', '#A0D6A0', '#F5C080', '#9B59B6', '#F5D76E']

export default function WordList() {
  const [books, setBooks] = useState<WordBook[]>([])
  const [activeBook, setActiveBook] = useState<string | null>(null)
  const [words, setWords] = useState<Word[]>([])
  const [search, setSearch] = useState('')
  const [selectedWord, setSelectedWord] = useState<Word | null>(null)

  useEffect(() => {
    db.wordBooks.toArray().then(setBooks)
  }, [])

  useEffect(() => {
    if (!activeBook && books.length > 0) {
      setActiveBook(books[0].id)
    }
  }, [books, activeBook])

  useEffect(() => {
    if (!activeBook) return
    const book = books.find(b => b.id === activeBook)
    if (!book) return
    const orderIndex = new Map(book.wordIds.map((id, i) => [id, i]))
    db.words.where('id').anyOf(book.wordIds).toArray().then(all => {
      all.sort((a, b) => (orderIndex.get(a.id) ?? 999) - (orderIndex.get(b.id) ?? 999))
      setWords(all)
    })
  }, [activeBook, books])

  const filtered = search
    ? words.filter(w => w.word.toLowerCase().includes(search.toLowerCase()))
    : words

  return (
    <div className="page">
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>📚 词库</h2>

      {/* Book selector */}
      <div style={{ display: 'flex', gap: 8, overflow: 'auto', marginBottom: 12, paddingBottom: 4 }}>
        {books.map(book => (
          <button
            key={book.id}
            className={`btn ${activeBook === book.id ? 'btn-primary' : 'btn-outline'}`}
            style={{ whiteSpace: 'nowrap', padding: '6px 14px', fontSize: 13 }}
            onClick={() => setActiveBook(book.id)}
          >
            {book.name}
          </button>
        ))}
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 12 }}>
        <input
          type="text"
          placeholder="🔍 搜索单词..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)',
            border: '2px solid #F0E8F5', fontFamily: 'inherit', fontSize: 14,
            outline: 'none', background: 'white',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--pink)'}
          onBlur={e => e.target.style.borderColor = '#F0E8F5'}
        />
      </div>

      {/* Word count */}
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>
        共 {filtered.length} 个单词
      </div>

      {/* Word list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map(word => (
          <div
            key={word.id}
            className="card"
            style={{ padding: '12px 16px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            onClick={() => setSelectedWord(word)}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, display: 'inline-flex', gap: 2 }}>
                {getWordSyllables(word).map((s, i) => (
                  <span key={i} style={{ color: SYLLABLE_COLORS[i % SYLLABLE_COLORS.length] }}>{s}</span>
                ))}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>
                {word.partOfSpeech}
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'right', maxWidth: '50%' }}>
              {word.definitions[0]?.zh || word.definitions[0]?.en}
            </div>
          </div>
        ))}
      </div>

      {/* Detail modal */}
      {selectedWord && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
          animation: 'pop 0.25s ease',
        }} onClick={() => setSelectedWord(null)}>
          <div style={{
            background: 'white', width: '90%', maxWidth: 480, margin: '0 auto',
            borderRadius: 20, maxHeight: '80vh', overflow: 'auto',
            padding: 20,
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div />
              <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={() => setSelectedWord(null)}>
                ✕ 关闭
              </button>
            </div>
            <WordDetail word={selectedWord} />
          </div>
        </div>
      )}
    </div>
  )
}
