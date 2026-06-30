import { useState, useCallback, useEffect } from 'react'
import type { ReviewRecord, Word } from '../types'
import { updateReviewRecord } from '../srs'
import { db } from '../db'
import { speakWord } from '../tts'
import { getWordSyllables } from '../phonics'
import WordDetail from './WordDetail'

const SYLLABLE_COLORS = ['#F5A0D0', '#5D9CEC', '#A0D6A0', '#F5C080', '#9B59B6', '#F5D76E']

interface Props {
  words: Map<string, Word>
  dueReviews: ReviewRecord[]
  onComplete: () => void
}

export default function ReviewSession({ words, dueReviews, onComplete }: Props) {
  const queue = dueReviews.filter(r => r.status !== 'mastered')
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [results, setResults] = useState<{ wordId: string; correct: boolean }[]>([])
  const [streak, setStreak] = useState(0)
  const [stars, setStars] = useState(0)

  const record = queue[index]
  const word = record ? words.get(record.wordId) : undefined
  const isLast = index >= queue.length - 1
  const progress = queue.length > 0 ? ((index) / queue.length * 100) : 100

  const handleResponse = useCallback(async (correct: boolean) => {
    if (!record || !word) return
    const updated = updateReviewRecord(record, correct)
    await db.reviews.put(updated)
    setResults(r => [...r, { wordId: word.id, correct }])
    if (correct) {
      setStreak(s => s + 1)
      if (streak >= 2) setStars(s => s + 1)
    } else {
      setStreak(0)
    }
    setShowAnswer(false)
    if (isLast) {
      onComplete()
    } else {
      setIndex(i => i + 1)
    }
  }, [record, word, isLast, streak, onComplete])

  useEffect(() => {
    if (word) {
      speakWord(word.word).catch(() => {})
    }
  }, [index])

  if (!word || !record) {
    return (
      <div className="page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>复习完成！</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
          太棒了，继续加油！
        </p>
        <button className="btn btn-primary" onClick={onComplete}>
          返回首页
        </button>
      </div>
    )
  }

  return (
    <div className="page" style={{ paddingTop: 8 }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: 12 }} onClick={onComplete}>
          ✕ 退出
        </button>
        <div style={{ flex: 1 }}>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
          {index + 1}/{queue.length}
        </div>
      </div>

      {/* Streak & Stars */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 12, fontSize: 14 }}>
        <span>🔥 {streak} 连击</span>
        <span>⭐ {stars} 奖励星</span>
      </div>

      {/* Word card */}
      <div
        className="card"
        style={{
          minHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 16,
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={() => !showAnswer && setShowAnswer(true)}
      >
        <div style={{ position: 'absolute', top: -20, right: -20, fontSize: 60, opacity: 0.08, transform: 'rotate(15deg)' }}>🦄</div>

        <div style={{ fontSize: 40, fontWeight: 800, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          {getWordSyllables(word).map((s, i) => (
            <span key={i} style={{ color: SYLLABLE_COLORS[i % SYLLABLE_COLORS.length] }}>{s}</span>
          ))}
        </div>
        {word.phonetic && !showAnswer && (
          <div style={{ fontSize: 16, color: 'var(--text-secondary)', fontFamily: 'serif' }}>
            {word.phonetic}
          </div>
        )}
        <button
          className="btn btn-secondary"
          style={{ padding: '8px 16px', fontSize: 13, marginTop: 8 }}
          onClick={e => { e.stopPropagation(); speakWord(word.word) }}
        >
          🔊 听发音
        </button>

        {showAnswer && (
          <div style={{ width: '100%', animation: 'slideUp 0.3s ease', marginTop: 12 }}>
            <div style={{ borderTop: '1px solid #F0E8F5', paddingTop: 12 }}>
              {word.definitions.map((d, i) => (
                <div key={i} style={{ fontSize: 14, marginBottom: 4, lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--blue)', fontWeight: 600 }}>{d.en}</span>
                  {d.zh && <div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{d.zh}</div>}
                </div>
              ))}
            </div>

            {word.rootAffix && (
              <div style={{ marginTop: 8, fontSize: 12, color: 'var(--purple)', padding: '4px 8px', background: '#F5F0FF', borderRadius: 6 }}>
                🌳 {word.rootAffix.explanation}
              </div>
            )}

            {word.mnemonics && (
              <div style={{ marginTop: 4, fontSize: 12, color: 'var(--text-secondary)', padding: '4px 8px', background: '#FFF8F0', borderRadius: 6 }}>
                🧠 {word.mnemonics}
              </div>
            )}

            {word.phrases && word.phrases.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-light)', marginBottom: 4 }}>🔗 短语搭配</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {word.phrases.map((p, i) => (
                    <span key={i} style={{ fontSize: 12, background: '#E8F5E9', padding: '2px 8px', borderRadius: 4, color: '#2E7D32' }}>
                      {p.phrase}{p.meaning ? ` ${p.meaning}` : ''}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {word.synonyms && word.synonyms.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-light)', marginBottom: 4 }}>🔀 近义词</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {word.synonyms.map((s, i) => (
                    <span key={i} style={{ fontSize: 12, background: '#E3F2FD', padding: '2px 8px', borderRadius: 4, color: '#1565C0' }}>
                      {s.word}{s.zh ? <span style={{ color: '#0D47A1', marginLeft: 4, opacity: 0.8 }}>（{s.zh}）</span> : ''}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {word.similarWords && word.similarWords.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-light)', marginBottom: 4 }}>🔍 形近词</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {word.similarWords.map((s, i) => (
                    <span key={i} style={{ fontSize: 12, background: '#FFF3E0', padding: '2px 8px', borderRadius: 4, color: '#E65100' }}>
                      {s.word}{s.zh ? <span style={{ color: '#BF360C', marginLeft: 4, opacity: 0.8 }}>（{s.zh}）</span> : ''}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              style={{ marginTop: 10, fontSize: 12, color: 'var(--purple)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}
              onClick={e => { e.stopPropagation(); setShowDetail(true) }}
            >
              📖 查看全部详情（例句/变形/词根/助记）
            </button>
          </div>
        )}
      </div>

      {/* Buttons */}
      {showAnswer && (
        <div style={{ display: 'flex', gap: 12, animation: 'slideUp 0.3s ease' }}>
          <button
            className="btn btn-outline"
            style={{ flex: 1, borderColor: 'var(--red)', color: 'var(--red)', padding: '14px 0', fontSize: 16 }}
            onClick={() => handleResponse(false)}
          >
            😅 忘了
          </button>
          <button
            className="btn btn-primary"
            style={{ flex: 1, padding: '14px 0', fontSize: 16 }}
            onClick={() => handleResponse(true)}
          >
            ✅ 记住了
          </button>
        </div>
      )}

      {!showAnswer && (
        <div style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: 13 }}>
          👆 点击卡片查看答案
        </div>
      )}

      {/* Detail Modal */}
      {showDetail && word && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
          animation: 'pop 0.25s ease',
        }} onClick={() => setShowDetail(false)}>
          <div style={{
            background: 'white', width: '90%', maxWidth: 480, margin: '0 auto',
            borderRadius: 20, maxHeight: '80vh', overflow: 'auto',
            padding: 20,
          }} onClick={e => e.stopPropagation()}>
            <WordDetail word={word} />
          </div>
        </div>
      )}
    </div>
  )
}
