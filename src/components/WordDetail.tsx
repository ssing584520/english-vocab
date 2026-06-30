import { useState } from 'react'
import type { Word } from '../types'
import { displaySyllablesColored } from '../phonics'
import { speakWord, speakSentence } from '../tts'

interface Props {
  word: Word
}

export default function WordDetail({ word }: Props) {
  const [speaking, setSpeaking] = useState<string | null>(null)

  function handleSpeak(text: string, type: 'word' | 'sentence') {
    setSpeaking(text)
    const fn = type === 'word' ? speakWord : speakSentence
    fn(text).finally(() => setSpeaking(null))
  }

  return (
    <div style={{ animation: 'slideUp 0.3s ease' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--pink)' }}>{word.word}</h2>
        <button className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }} onClick={() => handleSpeak(word.word, 'word')}>
          {speaking === word.word ? '🔊' : '🔊'}
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        {word.phonetic && <span style={{ fontSize: 15, color: 'var(--text-secondary)', fontFamily: 'serif' }}>{word.phonetic}</span>}
        <span style={{ fontSize: 13, color: 'var(--pink)', background: 'var(--pink-light)', padding: '2px 8px', borderRadius: 4 }}>{word.partOfSpeech}</span>
        <span style={{ fontSize: 13, background: 'var(--purple-light)', padding: '2px 8px', borderRadius: 4, display: 'inline-flex', gap: 3 }}>
          {displaySyllablesColored(word.word).map((s, i) => (
            <span key={i} style={{ color: s.color, fontWeight: 700 }}>{s.text}</span>
          ))}
        </span>
      </div>

      {/* Definitions */}
      <Section title="📖 释义">
        {word.definitions.map((d, i) => (
          <div key={i} style={{ marginBottom: 8, lineHeight: 1.5 }}>
            <div style={{ fontSize: 15, color: 'var(--blue)', fontWeight: 600 }}>{d.en}</div>
            {d.zh && <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{d.zh}</div>}
          </div>
        ))}
      </Section>

      {/* Inflections */}
      {word.inflections && (
        <Section title="🔄 词汇变形">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, fontSize: 14 }}>
            {word.inflections.plural !== undefined && <InfoRow label="复数" value={word.inflections.plural} />}
            {word.inflections.thirdPerson !== undefined && <InfoRow label="第三人称" value={word.inflections.thirdPerson} />}
            {word.inflections.presentParticiple !== undefined && <InfoRow label="现在分词" value={word.inflections.presentParticiple} />}
            {word.inflections.pastTense !== undefined && <InfoRow label="过去式" value={word.inflections.pastTense} />}
            {word.inflections.pastParticiple !== undefined && <InfoRow label="过去分词" value={word.inflections.pastParticiple} />}
            {word.inflections.comparative !== undefined && <InfoRow label="比较级" value={word.inflections.comparative} />}
            {word.inflections.superlative !== undefined && <InfoRow label="最高级" value={word.inflections.superlative} />}
          </div>
        </Section>
      )}

      {/* Root/Affix */}
      {word.rootAffix && (
        <Section title="🌳 词根词缀">
          <div style={{ fontSize: 14, lineHeight: 1.8 }}>
            {word.rootAffix.prefix && <Tag label="前缀" value={word.rootAffix.prefix} />}
            {word.rootAffix.root && <Tag label="词根" value={word.rootAffix.root} />}
            {word.rootAffix.suffix && <Tag label="后缀" value={word.rootAffix.suffix} />}
            <div style={{ marginTop: 6, color: 'var(--text-secondary)' }}>{word.rootAffix.explanation}</div>
          </div>
        </Section>
      )}

      {/* Mnemonics */}
      {word.mnemonics && (
        <Section title="🧠 助记">
          <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {word.mnemonics}
          </div>
        </Section>
      )}

      {/* Examples */}
      {word.examples.length > 0 && (
        <Section title="✏️ 例句">
          {word.examples.map((ex, i) => (
            <div key={i} style={{ marginBottom: 10, padding: '8px 12px', background: '#F8F0FF', borderRadius: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
                <span>{ex.sentence}</span>
                <button className="btn btn-secondary" style={{ padding: '2px 6px', fontSize: 10 }} onClick={() => handleSpeak(ex.sentence, 'sentence')}>
                  {speaking === ex.sentence ? '🔊' : '🔊'}
                </button>
              </div>
              {ex.translation && <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 2 }}>{ex.translation}</div>}
            </div>
          ))}
        </Section>
      )}

      {/* Phrases */}
      {word.phrases && word.phrases.length > 0 && (
        <Section title="🔗 常用短语">
          {word.phrases.map((p, i) => (
            <div key={i} style={{ padding: '6px 0', borderBottom: '1px solid #F5F0F8', fontSize: 14 }}>
              <span>{p.phrase}{p.meaning ? ` ${p.meaning}` : ''}</span>
            </div>
          ))}
        </Section>
      )}

      {/* Synonyms */}
      {word.synonyms && word.synonyms.length > 0 && (
        <Section title="🔀 近义词">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {word.synonyms.map((s, i) => (
              <span key={i} style={{
                fontSize: 14, fontWeight: 600,
                background: '#E3F2FD', color: '#1565C0',
                padding: '4px 12px', borderRadius: 16,
              }}>
                {s.word}{s.zh ? <span style={{ color: '#0D47A1', marginLeft: 4, opacity: 0.8 }}>（{s.zh}）</span> : ''}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Similar Words */}
      {word.similarWords && word.similarWords.length > 0 && (
        <Section title="🔍 形近词">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {word.similarWords.map((s, i) => (
              <span key={i} style={{
                fontSize: 14, fontWeight: 600,
                background: s.reason === '拓展' ? '#E8F5E9' : '#FFF3E0',
                color: s.reason === '拓展' ? '#2E7D32' : '#E65100',
                padding: '4px 12px', borderRadius: 16,
              }}>
                {s.word}{s.zh ? <span style={{ marginLeft: 4, opacity: 0.8 }}>（{s.zh}）</span> : ''}
              </span>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>{title}</h3>
      {children}
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span style={{ color: 'var(--text-light)', marginRight: 4 }}>{label}:</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  )
}

function Tag({ label, value }: { label: string; value: string }) {
  return (
    <span style={{ marginRight: 12 }}>
      <span style={{ color: 'var(--text-light)', fontSize: 12 }}>{label}: </span>
      <span style={{ fontWeight: 700, color: 'var(--purple)' }}>{value}</span>
    </span>
  )
}
