import { useState, useEffect } from 'react'
import { db } from '../db'
import { defaultWords, defaultBook, sampleBooks } from '../wordBank'
import { createReviewRecord, calcStreak } from '../srs'
import { loadSettings, saveSettings as saveSettingsUtil } from '../settings'
import type { UserSettings } from '../types'
import ImportWords from './ImportWords'

export default function Profile() {
  const [showImport, setShowImport] = useState(false)
  const [showPlanSettings, setShowPlanSettings] = useState(false)
  const [settings, setSettings] = useState<UserSettings>(loadSettings())
  const [editNewWords, setEditNewWords] = useState(settings.dailyNewWords)
  const [editReviewGoal, setEditReviewGoal] = useState(settings.dailyReviewGoal)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    const s = loadSettings()
    setSettings(s)
    setEditNewWords(s.dailyNewWords)
    setEditReviewGoal(s.dailyReviewGoal)
    db.dailyLogs.toArray().then(logs => calcStreak(logs).then(setStreak))
  }, [])

  async function handleReset() {
    if (!confirm('确定要重置所有数据吗？这将清除所有学习进度。')) return
    await db.words.clear()
    await db.wordBooks.clear()
    await db.reviews.clear()
    await db.dailyLogs.clear()
    await db.dictations.clear()

    await db.words.bulkAdd(defaultWords)
    await db.wordBooks.add(defaultBook)
    await db.wordBooks.bulkAdd(sampleBooks)
    const reviews = defaultWords.map(w => createReviewRecord(w.id, defaultBook.id))
    await db.reviews.bulkAdd(reviews)

    alert('已重置数据！')
    window.location.reload()
  }

  function handleSaveSettings() {
    const updated = saveSettingsUtil({ dailyNewWords: editNewWords, dailyReviewGoal: editReviewGoal })
    setSettings(updated)
    setShowPlanSettings(false)
  }

  if (showImport) return <ImportWords onBack={() => setShowImport(false)} />

  return (
    <div className="page">
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 64, animation: 'float 3s ease-in-out infinite' }}>🦄</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>小马背单词</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>v1.0.0 · 用魔法记住每一个单词 ✨</p>
      </div>

      {streak > 0 && (
        <div className="card" style={{ textAlign: 'center', padding: 12, marginBottom: 16, background: '#FFF8F0' }}>
          <div style={{ fontSize: 14, color: 'var(--orange)', fontWeight: 700 }}>
            🔥 已连续打卡 {streak} 天
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <MenuItem icon="📋" label="每日计划" desc={`每天 ${settings.dailyNewWords} 个新词，复习上限 ${settings.dailyReviewGoal} 个`} onClick={() => setShowPlanSettings(true)} />
        <MenuItem icon="📥" label="导入词书" desc="从文件导入自定义单词表" onClick={() => setShowImport(true)} />
        <MenuItem icon="🔧" label="重置数据" desc="清除所有学习进度并恢复默认" onClick={handleReset} />
      </div>

      <div style={{ marginTop: 24, padding: 16, textAlign: 'center', fontSize: 13, color: 'var(--text-light)', lineHeight: 1.8 }}>
        <p>🌟 小马宝莉主题背单词</p>
        <p>💖 由紫悦、碧琪、云宝、珍奇、苹果嘉儿、柔柔陪伴</p>
        <p>📚 艾宾浩斯遗忘曲线 · 自然拼读 · AI 助记</p>
      </div>

      {/* Plan Settings Modal */}
      {showPlanSettings && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
          animation: 'pop 0.25s ease',
        }} onClick={() => setShowPlanSettings(false)}>
          <div style={{
            background: 'white', width: '90%', maxWidth: 380, margin: '0 auto',
            borderRadius: 20, padding: 24,
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>⚙️ 每日计划设置</h3>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, display: 'block' }}>
                每日新词数
              </label>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditNewWords(Math.max(1, editNewWords - 5))}>-5</button>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditNewWords(Math.max(1, editNewWords - 1))}>-1</button>
                <span style={{ fontSize: 24, fontWeight: 800, minWidth: 50, textAlign: 'center', color: 'var(--pink)' }}>{editNewWords}</span>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditNewWords(editNewWords + 1)}>+1</button>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditNewWords(editNewWords + 5)}>+5</button>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, display: 'block' }}>
                每日复习上限
              </label>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditReviewGoal(Math.max(5, editReviewGoal - 10))}>-10</button>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditReviewGoal(Math.max(5, editReviewGoal - 5))}>-5</button>
                <span style={{ fontSize: 24, fontWeight: 800, minWidth: 50, textAlign: 'center', color: 'var(--blue)' }}>{editReviewGoal}</span>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditReviewGoal(editReviewGoal + 5)}>+5</button>
                <button className="btn btn-outline" style={{ padding: '6px 14px' }} onClick={() => setEditReviewGoal(editReviewGoal + 10)}>+10</button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowPlanSettings(false)}>
                取消
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSaveSettings}>
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MenuItem({ icon, label, desc, onClick }: { icon: string; label: string; desc: string; onClick: () => void }) {
  return (
    <div className="card" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: 14 }} onClick={onClick}>
      <div style={{ fontSize: 28 }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 15 }}>{label}</div>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{desc}</div>
      </div>
    </div>
  )
}
