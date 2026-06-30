import { useState, useEffect } from 'react'
import type { TabName } from './types'
import { db } from './db'
import { defaultWords, defaultBook, sampleBooks } from './wordBank'
import { createReviewRecord } from './srs'
import Home from './components/Home'
import WordList from './components/WordList'
import PracticeHub from './components/PracticeHub'
import Stats from './components/Stats'
import Profile from './components/Profile'

const tabs: { key: TabName; label: string; icon: string }[] = [
  { key: 'home', label: '学习', icon: '📖' },
  { key: 'words', label: '词库', icon: '📚' },
  { key: 'practice', label: '练习', icon: '✏️' },
  { key: 'stats', label: '统计', icon: '📊' },
  { key: 'profile', label: '我的', icon: '🦄' },
]

export default function App() {
  const [tab, setTab] = useState<TabName>('home')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function init() {
      const bookCount = await db.wordBooks.count()
      if (bookCount === 0) {
        await db.words.bulkAdd(defaultWords)
        await db.wordBooks.add(defaultBook)
        await db.wordBooks.bulkAdd(sampleBooks)
        const reviews = defaultWords.map(w =>
          createReviewRecord(w.id, defaultBook.id)
        )
        await db.reviews.bulkAdd(reviews)
      } else {
        // Sync latest enrichment data from wordBank.ts into IndexedDB
        await db.words.bulkPut(defaultWords)
      }
      setReady(true)
    }
    init()
  }, [])

  if (!ready) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 48, animation: 'float 2s ease-in-out infinite' }}>🦄</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--pink)' }}>小马背单词</div>
        <div style={{ width: 200 }}><div className="progress-bar"><div className="progress-bar-fill" style={{ width: '60%' }} /></div></div>
      </div>
    )
  }

  return (
    <>
      <main style={{ flex: 1, paddingTop: 0 }}>
        {tab === 'home' && <Home />}
        {tab === 'words' && <WordList />}
        {tab === 'practice' && <PracticeHub />}
        {tab === 'stats' && <Stats />}
        {tab === 'profile' && <Profile />}
      </main>

      <nav className="tab-bar">
        {tabs.map(t => (
          <button
            key={t.key}
            className={`tab-item${tab === t.key ? ' active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            <span className="tab-icon">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
