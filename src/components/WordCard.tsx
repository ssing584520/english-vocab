import { useState } from 'react'
import type { Word } from '../types'
import { getWordSyllables } from '../phonics'
import { speakWord } from '../tts'

const SYLLABLE_COLORS = ['#F5A0D0', '#5D9CEC', '#A0D6A0', '#F5C080', '#9B59B6', '#F5D76E']

interface Props {
  word: Word
  showBack?: boolean
  flipped?: boolean
}

export default function WordCard({ word, showBack = true, flipped }: Props) {
  const [isFlipped, setFlipped] = useState(flipped ?? false)
  const [speaking, setSpeaking] = useState(false)

  function handleSpeak() {
    if (speaking) return
    setSpeaking(true)
    speakWord(word.word).finally(() => setSpeaking(false))
  }

  return (
    <div
      className="card"
      style={{
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => setFlipped(!isFlipped)}
    >
      {/* MLP decorative top */}
      <div style={{
        position: 'absolute',
        top: -20, right: -20,
        fontSize: 60, opacity: 0.1,
        transform: 'rotate(15deg)',
      }}>🦄</div>

      {!isFlipped ? (
        /* Front: Word display */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <div style={{ fontSize: 36, fontWeight: 800, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            {getWordSyllables(word).map((s, i) => (
              <span key={i} style={{ color: SYLLABLE_COLORS[i % SYLLABLE_COLORS.length] }}>{s}</span>
            ))}
          </div>
          {word.phonetic && (
            <div style={{ fontSize: 16, color: 'var(--text-secondary)', fontFamily: 'serif' }}>
              {word.phonetic}
            </div>
          )}
          <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 4 }}>
            {word.partOfSpeech}
          </div>
          <button
            className="btn btn-secondary"
            style={{ marginTop: 12, padding: '8px 16px', fontSize: 13 }}
            onClick={e => { e.stopPropagation(); handleSpeak() }}
          >
            {speaking ? '🔊 ...' : '🔊 听发音'}
          </button>
          <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 8 }}>
            👆 点击翻转查看释义
          </div>
        </div>
      ) : (
        /* Back: Details */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--pink)' }}>{word.word}</span>
            <button className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }} onClick={e => { e.stopPropagation(); handleSpeak() }}>
              🔊
            </button>
          </div>

          {showBack && (
            <>
              {/* Definitions */}
              {word.definitions.map((d, i) => (
                <div key={i} style={{ fontSize: 14, lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--blue)', fontWeight: 600 }}>英: </span>{d.en}
                  {d.zh && <div style={{ color: 'var(--text-secondary)' }}>{d.zh}</div>}
                </div>
              ))}

              {/* Examples */}
              {word.examples.length > 0 && (
                <div style={{ marginTop: 4 }}>
                  {word.examples.slice(0, 2).map((ex, i) => (
                    <div key={i} style={{ fontSize: 13, color: 'var(--text-secondary)', padding: '4px 8px', background: '#F8F0FF', borderRadius: 6, marginBottom: 4 }}>
                      <div>✏️ {ex.sentence}</div>
                      {ex.translation && <div style={{ color: 'var(--text-light)' }}>{ex.translation}</div>}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
