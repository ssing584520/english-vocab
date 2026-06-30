import { useState, useEffect } from 'react'
import { db } from '../db'
import type { ReviewRecord, Word, DictationRecord, WordBook } from '../types'
import ReviewSession from './ReviewSession'
import WordDetail from './WordDetail'

export default function Stats() {
  const [reviews, setReviews] = useState<ReviewRecord[]>([])
  const [dictations, setDictations] = useState<DictationRecord[]>([])
  const [words, setWords] = useState<Map<string, Word>>(new Map())
  const [totalWords, setTotalWords] = useState(0)
  const [reviewingWrong, setReviewingWrong] = useState(false)
  const [wrongReviewList, setWrongReviewList] = useState<ReviewRecord[]>([])
  const [detailWord, setDetailWord] = useState<Word | null>(null)
  const [showMastered, setShowMastered] = useState(false)
  const [books, setBooks] = useState<WordBook[]>([])
  const [activeBookId, setActiveBookId] = useState<string | null>(null)

  useEffect(() => {
    loadBooks()
  }, [])

  useEffect(() => {
    if (activeBookId) {
      loadReviews()
    }
  }, [activeBookId])

  async function loadBooks() {
    const [bookList, w] = await Promise.all([
      db.wordBooks.toArray(),
      db.words.toArray(),
    ])
    setBooks(bookList)
    setWords(new Map(w.map(x => [x.id, x])))
    if (bookList.length > 0) {
      setActiveBookId(bookList[0].id)
    }
  }

  async function loadReviews() {
    const [r, d] = await Promise.all([
      db.reviews.toArray(),
      db.dictations.toArray(),
    ])
    const bookR = r.filter(rev => rev.bookId === activeBookId)
    setReviews(bookR)
    setDictations(d)
    const book = books.find(b => b.id === activeBookId)
    setTotalWords(book ? book.wordIds.length : 0)
  }

  const mastered = reviews.filter(r => r.status === 'mastered').length
  const reviewing = reviews.filter(r => r.status === 'reviewing').length
  const learning = reviews.filter(r => r.status === 'learning').length
  const newWords = reviews.filter(r => r.status === 'new').length

  const totalRevNum = reviews.reduce((s, r) => s + r.totalReviews, 0)
  const totalCorrect = reviews.reduce((s, r) => s + r.correctCount, 0)
  const accuracy = totalRevNum > 0 ? Math.round(totalCorrect / totalRevNum * 100) : 0

  /** Words with any wrong answer, sorted by worst first */
  const wrongWordIds = new Set<string>()
  // From reviews
  reviews.filter(r =>
    r.wrongCount > 0
  ).forEach(r => wrongWordIds.add(r.wordId))
  // From dictations: words with any wrong dictation attempt
  const dictCount = new Map<string, { correct: number; wrong: number }>()
  dictations.forEach(d => {
    const c = dictCount.get(d.wordId) || { correct: 0, wrong: 0 }
    if (d.correct) c.correct++
    else c.wrong++
    dictCount.set(d.wordId, c)
  })
  dictCount.forEach((c, wordId) => {
    if (c.wrong > 0) wrongWordIds.add(wordId)
  })

  const wrongWords = reviews.filter(r => wrongWordIds.has(r.wordId)).sort((a, b) => {
    const aScore = (a.wrongCount - a.correctCount) + (dictCount.get(a.wordId)?.wrong || 0) - (dictCount.get(a.wordId)?.correct || 0)
    const bScore = (b.wrongCount - b.correctCount) + (dictCount.get(b.wordId)?.wrong || 0) - (dictCount.get(b.wordId)?.correct || 0)
    return bScore - aScore
  })

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayReviews = reviews.filter(r => r.lastReview >= today.getTime()).length

  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  weekAgo.setHours(0, 0, 0, 0)
  const weekReviews = reviews.filter(r => r.lastReview >= weekAgo.getTime()).length

  if (reviewingWrong && wrongReviewList.length > 0) {
    return (
      <ReviewSession
        words={words}
        dueReviews={wrongReviewList}
        onComplete={() => { setReviewingWrong(false); loadReviews() }}
      />
    )
  }

  return (
    <div className="page">
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>📊 学习统计</h2>

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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        <div className="card" style={{ textAlign: 'center', padding: 16 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--pink)' }}>{totalWords}</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>总词量</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 16, cursor: 'pointer' }} onClick={() => setShowMastered(true)}>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--green)' }}>{mastered}</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>已掌握</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 16 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--blue)' }}>{accuracy}%</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>正确率</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 16 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--orange)' }}>{totalRevNum}</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>总复习次数</div>
        </div>
      </div>

      {/* Wrong words section */}
      {wrongWords.length > 0 && (
        <div className="card" style={{ marginBottom: 16, border: '2px solid var(--red)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700 }}>
              ⚠️ 错词本 <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 400 }}>（记录所有出错的词）</span>
            </h3>
            <button
              className="btn btn-primary"
              style={{ padding: '6px 14px', fontSize: 12 }}
              onClick={() => { setWrongReviewList(wrongWords.slice(0, 20)); setReviewingWrong(true) }}
            >
              🔄 复习错词
            </button>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 8 }}>
            共 {wrongWords.length} 个错词，最多复习前 20 个
          </div>
          {wrongWords.map(r => {
            const w = words.get(r.wordId)
            if (!w) return null
            const wrongRate = r.totalReviews > 0 ? Math.round(r.wrongCount / r.totalReviews * 100) : 0
            return (
              <div
                key={r.wordId}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 0', borderBottom: '1px solid #FFF0F0', fontSize: 13,
                  cursor: 'pointer',
                }}
                onClick={() => setDetailWord(w)}
              >
                <div>
                  <span style={{ fontWeight: 700 }}>{w.word}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-light)', marginLeft: 6 }}>{w.phonetic}</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                    错{r.wrongCount}/对{r.correctCount}
                  </span>
                  <span style={{
                    fontSize: 11, padding: '2px 6px', borderRadius: 8,
                    background: wrongRate > 70 ? 'var(--red-light, #FFF0F0)' : 'var(--orange-light, #FFF5E0)',
                    color: wrongRate > 70 ? 'var(--red)' : 'var(--orange)',
                    fontWeight: 600,
                  }}>
                    错{wrongRate}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {wrongWords.length === 0 && (
        <div className="card" style={{ marginBottom: 16, textAlign: 'center', padding: 20, background: '#F0FFF0' }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
          <div style={{ fontSize: 14, color: 'var(--green)', fontWeight: 700 }}>没有错词！你的正确率很高 ✨</div>
        </div>
      )}

      {/* Word status */}
      <div className="card" style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>📈 词汇掌握分布</h3>
        {[
          { label: '已掌握', value: mastered, color: 'var(--green)' },
          { label: '复习中', value: reviewing, color: 'var(--blue)' },
          { label: '学习中', value: learning, color: 'var(--orange)' },
          { label: '新词', value: newWords, color: 'var(--text-light)' },
        ].map(item => (
          <div key={item.label} style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 3 }}>
              <span>{item.label}</span>
              <span style={{ color: item.color, fontWeight: 700 }}>{item.value}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${totalWords > 0 ? item.value / totalWords * 100 : 0}%`, background: item.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="card">
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>⏱️ 近期活动</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ background: 'var(--blue-light)', borderRadius: 10, padding: 12, textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--blue)' }}>{todayReviews}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>今日复习</div>
          </div>
          <div style={{ background: 'var(--green-light)', borderRadius: 10, padding: 12, textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--green)' }}>{weekReviews}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>本周复习</div>
          </div>
        </div>
      </div>

      {/* Word Detail Modal */}
      {/* Mastered words modal */}
      {showMastered && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
        }} onClick={() => setShowMastered(false)}>
          <div style={{
            background: 'white', width: '90%', maxWidth: 420, margin: '0 auto',
            borderRadius: 20, maxHeight: '80vh', overflow: 'auto', padding: 20,
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>🌟 已掌握单词（{mastered} 个）</h3>
            {reviews.filter(r => r.status === 'mastered').map(r => {
              const w = words.get(r.wordId)
              if (!w) return null
              return (
                <div key={r.wordId} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 0', borderBottom: '1px solid #F0F0F0', fontSize: 13,
                  cursor: 'pointer',
                }} onClick={() => { setDetailWord(w); setShowMastered(false) }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>{w.word}</span>
                    <span style={{ marginLeft: 6, fontSize: 11, color: 'var(--text-light)' }}>{w.phonetic}</span>
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--green)' }}>
                    正确率 {r.totalReviews > 0 ? Math.round(r.correctCount / r.totalReviews * 100) : '-'}%
                  </span>
                </div>
              )
            })}
            <button className="btn btn-primary" style={{ width: '100%', marginTop: 12 }} onClick={() => setShowMastered(false)}>
              关闭
            </button>
          </div>
        </div>
      )}

      {detailWord && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
          animation: 'pop 0.25s ease',
        }} onClick={() => setDetailWord(null)}>
          <div style={{
            background: 'white', width: '90%', maxWidth: 480, margin: '0 auto',
            borderRadius: 20, maxHeight: '80vh', overflow: 'auto',
            padding: 20,
          }} onClick={e => e.stopPropagation()}>
            <WordDetail word={detailWord} />
          </div>
        </div>
      )}
    </div>
  )
}
