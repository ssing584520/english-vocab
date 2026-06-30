import { useState, useEffect } from 'react'
import { db } from '../db'
import { getDueReviews, getTodayPlan, buildSessionQueue, formatDate, calcStreak, getTodayStart } from '../srs'
import { loadSettings, saveSettings } from '../settings'
import type { ReviewRecord, Word, WordBook, TodayPlan } from '../types'
import ReviewSession from './ReviewSession'
import PostSessionTest from './PostSessionTest'
import MlpPet from './MlpPet'

export default function Home() {
  const [books, setBooks] = useState<WordBook[]>([])
  const [activeBookId, setActiveBookId] = useState<string | null>(null)
  const [allReviews, setAllReviews] = useState<ReviewRecord[]>([])
  const [words, setWords] = useState<Map<string, Word>>(new Map())
  const [sessionActive, setSessionActive] = useState(false)
  const [reviewOnly, setReviewOnly] = useState(false)
  const [showTestPrompt, setShowTestPrompt] = useState(false)
  const [testActive, setTestActive] = useState(false)
  const [testWords, setTestWords] = useState<Word[]>([])
  const [settings, setSettings] = useState(loadSettings)
  const [plan, setPlan] = useState<TodayPlan>({ newToday: 0, allDue: 0, doneToday: 0, total: 0, streak: 0 })
  const [checkedInToday, setCheckedInToday] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)
  const [editNewWords, setEditNewWords] = useState(settings.dailyNewWords)
  const [editReviewGoal, setEditReviewGoal] = useState(settings.dailyReviewGoal)

  async function refresh() {
    try {
      const allWords = await db.words.toArray()
      const wordMap = new Map(allWords.map(w => [w.id, w]))
      setWords(wordMap)

      const bookList = await db.wordBooks.toArray()
      setBooks(bookList)
      const currentBookId = activeBookId || (bookList.length > 0 ? bookList[0].id : null)
      if (!activeBookId && currentBookId) {
        setActiveBookId(currentBookId)
      }

      const reviews = await db.reviews.toArray()
      setAllReviews(reviews)

      const s = loadSettings()
      setSettings(s)
      setEditNewWords(s.dailyNewWords)
      setEditReviewGoal(s.dailyReviewGoal)

      const todayStr = formatDate(new Date())
      const todayLog = await db.dailyLogs.get(todayStr)
      setCheckedInToday(todayLog?.checkedIn || false)

      const dailyLogs = await db.dailyLogs.toArray()
      const streak = await calcStreak(dailyLogs)
      const todayTs = getTodayStart()
      const doneToday = reviews.filter(r => r.lastReview >= todayTs).length

      const bookR = currentBookId
        ? reviews.filter(r => r.bookId === currentBookId)
        : []
      const p = getTodayPlan(bookR, s.dailyNewWords)
      setPlan({ ...p, doneToday, streak })
    } catch (e) {
      console.error('refresh failed:', e)
    }
  }

  useEffect(() => { refresh() }, [])
  useEffect(() => {
    if (!activeBookId) return
    const bookR = allReviews.filter(r => r.bookId === activeBookId)
    const p = getTodayPlan(bookR, settings.dailyNewWords)
    const todayTs = getTodayStart()
    const doneToday = allReviews.filter(r => r.lastReview >= todayTs).length
    setPlan(prev => ({ ...p, doneToday, streak: prev.streak }))
  }, [activeBookId])

  const activeBook = books.find(b => b.id === activeBookId)
  const bookOrderIndex = activeBook?.wordIds
    ? new Map(activeBook.wordIds.map((id, i) => [id, i]))
    : null
  const bookReviews = activeBookId
    ? allReviews.filter(r => r.bookId === activeBookId).sort((a, b) => {
        if (!bookOrderIndex) return 0
        return (bookOrderIndex.get(a.wordId) ?? 999) - (bookOrderIndex.get(b.wordId) ?? 999)
      })
    : []
  const dueReviews = getDueReviews(bookReviews)
  const dueCount = dueReviews.filter(r => r.status !== 'mastered').length
  const masteredCount = bookReviews.filter(r => r.status === 'mastered').length

  async function handleCheckIn() {
    try {
      const todayStr = formatDate(new Date())
      const existing = await db.dailyLogs.get(todayStr) || {
        date: todayStr, newWords: 0, reviewedWords: 0,
        correctCount: 0, wrongCount: 0, studyMinutes: 0, checkedIn: false,
      }
      existing.checkedIn = true
      await db.dailyLogs.put(existing)
      setCheckedInToday(true)
      const dailyLogs = await db.dailyLogs.toArray()
      const streak = await calcStreak(dailyLogs)
      setPlan(prev => ({ ...prev, streak }))
    } catch (e) {
      console.error('checkin failed:', e)
    }
  }

  async function handleSessionDone() {
    const todayStr = formatDate(new Date())
    const todayTs = getTodayStart()
    const freshReviews = await db.reviews.toArray()
    try {
      const done = freshReviews.filter(r => r.lastReview >= todayTs).length
      const existing = await db.dailyLogs.get(todayStr) || {
        date: todayStr, newWords: 0, reviewedWords: 0,
        correctCount: 0, wrongCount: 0, studyMinutes: 0, checkedIn: false,
      }
      existing.reviewedWords = done
      const todayRev = freshReviews.filter(r => r.lastReview >= todayTs)
      existing.correctCount = todayRev.reduce((s, r) => s + r.correctCount, 0)
      existing.wrongCount = todayRev.reduce((s, r) => s + r.wrongCount, 0)
      await db.dailyLogs.put(existing)
      if (!existing.checkedIn) {
        existing.checkedIn = true
        await db.dailyLogs.put(existing)
        setCheckedInToday(true)
      }
    } catch (e) {
      console.error('session done failed:', e)
    }
    setSessionActive(false)
    setReviewOnly(false)
    await refresh()
    // Gather today's NEW words for test (totalReviews === 1 means first-time learning)
    const todayNewIds = freshReviews.filter(r =>
      r.lastReview >= todayTs && r.totalReviews === 1
    ).map(r => r.wordId)
    const studied = new Set(todayNewIds)
    const testW = words.size > 0 ? [...words.values()].filter(w => studied.has(w.id)) : []
    if (testW.length > 0) {
      setTestWords(testW)
      setShowTestPrompt(true)
    }
  }

  function handleSaveSettings() {
    try {
      const updated = saveSettings({ dailyNewWords: editNewWords, dailyReviewGoal: editReviewGoal })
      setSettings(updated)
      setShowSettings(false)
      refresh()
    } catch (e) {
      console.error('save settings failed:', e)
    }
  }

  if (sessionActive) {
    const queue = buildSessionQueue(bookReviews, reviewOnly ? 0 : settings.dailyNewWords, activeBook?.wordIds)
    if (queue.length === 0) return (
      <div className="page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>今日无待学习内容</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>所有单词已掌握或已安排，太棒了！</p>
        <button className="btn btn-primary" onClick={() => setSessionActive(false)}>返回首页</button>
      </div>
    )
    return (
      <ReviewSession
        words={words}
        dueReviews={queue}
        onComplete={handleSessionDone}
      />
    )
  }

  if (testActive && testWords.length > 0) {
    return (
      <PostSessionTest
        words={testWords}
        onComplete={() => { setTestActive(false); setTestWords([]) }}
      />
    )
  }

  const progress = plan.total > 0 ? Math.min(100, (plan.doneToday / plan.total) * 100) : 0

  return (
    <div className="page">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)' }}>
            小马背单词
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
            🦄 今天已复习 {plan.doneToday} 个词
          </p>
        </div>
        <MlpPet size="small" />
      </div>

      {/* Book selector */}
      {books.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, overflowX: 'auto', paddingBottom: 4 }}>
          {books.map(b => (
            <button
              key={b.id}
              className={`btn ${activeBookId === b.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '6px 14px', fontSize: 13, whiteSpace: 'nowrap', flexShrink: 0 }}
              onClick={() => setActiveBookId(b.id)}
            >
              {b.name}
            </button>
          ))}
        </div>
      )}

      {/* Review reminder banner */}
      {plan.total > plan.doneToday && plan.total > 0 && (
        <div style={{
          marginBottom: 16, padding: '12px 16px', borderRadius: 14,
          background: 'linear-gradient(135deg, #FFF0F5, #FFF5E0)',
          border: '2px solid var(--pink)',
          display: 'flex', alignItems: 'center', gap: 12,
          animation: 'pulse 2s ease-in-out infinite',
        }}>
          <span style={{ fontSize: 28 }}>📢</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--pink)' }}>
              还有 {plan.total - plan.doneToday} 个单词待学习
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              别忘了完成今天的计划哦！✨
            </div>
          </div>
        </div>
      )}

      {/* Check-in card */}
      {!checkedInToday ? (
        <div
          className="card"
          style={{
            marginBottom: 16, textAlign: 'center', padding: 20,
            background: 'linear-gradient(135deg, #FFF5F9, #F5F0FF)',
            cursor: 'pointer', border: '2px dashed var(--pink)',
          }}
          onClick={handleCheckIn}
        >
          <div style={{ fontSize: 48, marginBottom: 4 }}>🌸</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--pink)', marginBottom: 4 }}>
            签到打卡
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            {plan.streak > 0 ? `🔥 已连续 ${plan.streak} 天` : '点击开始今天的打卡吧！'}
          </div>
        </div>
      ) : (
        <div className="card" style={{ marginBottom: 16, textAlign: 'center', padding: 14, background: '#F0FFF0' }}>
          <div style={{ fontSize: 14, color: 'var(--green)', fontWeight: 700 }}>
            ✅ 今日已签到 · 🔥 连续 {plan.streak} 天
          </div>
        </div>
      )}

      {/* Today's plan */}
      <div className="card" style={{ marginBottom: 16, padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700 }}>
            📋 今日计划
          </h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              style={{ fontSize: 12, color: 'var(--green)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}
              onClick={() => setShowSchedule(true)}
            >
              📅 计划
            </button>
            <button
              style={{ fontSize: 12, color: 'var(--purple)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}
              onClick={() => { setShowSettings(true) }}
            >
              ⚙️ 设置
            </button>
          </div>
        </div>

        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 3 }}>
            <span>🆕 新词</span>
            <span style={{ fontWeight: 700, color: 'var(--blue)' }}>{Math.min(plan.doneToday, plan.newToday)} / {plan.newToday}</span>
          </div>
          <div className="progress-bar" style={{ height: 8 }}>
            <div className="progress-bar-fill" style={{
              width: `${plan.newToday > 0 ? Math.min(100, (plan.doneToday / plan.newToday) * 100) : 0}%`,
              background: 'var(--blue)',
            }} />
          </div>
        </div>

        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 3 }}>
            <span>🔄 复习</span>
            <span style={{ fontWeight: 700, color: 'var(--green)' }}>{Math.max(0, plan.doneToday - Math.min(plan.doneToday, plan.newToday))} / {plan.allDue}</span>
          </div>
          <div className="progress-bar" style={{ height: 8 }}>
            <div className="progress-bar-fill" style={{
              width: `${plan.allDue > 0 ? Math.min(100, ((plan.doneToday - Math.min(plan.doneToday, plan.newToday)) / plan.allDue) * 100) : 0}%`,
              background: 'var(--green)',
            }} />
          </div>
        </div>

        <div style={{ borderTop: '1px solid #F0E8F5', paddingTop: 10, marginTop: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 3 }}>
            <span style={{ fontWeight: 700 }}>📊 总进度</span>
            <span style={{ fontWeight: 700, color: 'var(--pink)' }}>{plan.doneToday} / {plan.total}</span>
          </div>
          <div className="progress-bar" style={{ height: 10 }}>
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <button
            className="btn btn-primary"
            style={{ flex: 1, fontSize: 16, padding: '14px 0', borderRadius: 24 }}
            onClick={() => { setReviewOnly(false); setSessionActive(true) }}
          >
            {plan.total > 0 ? '开始学习 ✨' : '随意看看 👀'}
          </button>
          <button
            className="btn btn-outline"
            style={{
              flex: 1, fontSize: 14, padding: '14px 0', borderRadius: 24,
              borderColor: plan.allDue > 0 ? 'var(--green)' : '#E0E0E0',
              color: plan.allDue > 0 ? 'var(--green)' : '#C0C0C0',
              cursor: plan.allDue > 0 ? 'pointer' : 'not-allowed',
            }}
            onClick={() => { if (plan.allDue > 0) { setReviewOnly(true); setSessionActive(true) } }}
          >
            🔄 仅复习 {plan.allDue > 0 ? `(${plan.allDue})` : '（无）'}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 16 }}>
        {[
          { label: '总词量', value: bookReviews.length, color: 'var(--blue)' },
          { label: '待复习', value: dueCount, color: 'var(--pink)' },
          { label: '已掌握', value: masteredCount, color: 'var(--green)' },
        ].map(s => (
          <div key={s.label} className="card" style={{ textAlign: 'center', padding: 14 }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Upcoming words preview */}
      {dueReviews.filter(r => r.status !== 'mastered').length > 0 && (
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
          📋 即将学习 · 新词 + 复习共 {dueReviews.filter(r => r.status !== 'mastered').length} 个
        </div>
      )}
      {dueReviews.filter(r => r.status !== 'mastered').slice(0, 5).map(record => {
        const word = words.get(record.wordId)
        if (!word) return null
        return (
          <div key={record.wordId} className="card" style={{ marginBottom: 8, padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{word.word}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{record.status === 'new' ? '🆕 新词' : `🔄 间隔 ${record.interval} 天`}</div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-light)' }}>
              正确率 {record.totalReviews > 0 ? Math.round(record.correctCount / record.totalReviews * 100) : '-'}%
            </div>
          </div>
        )
      })}

      {/* Schedule modal */}
      {showSchedule && (() => {
        const DAY_MS = 86400000
        const todayStart = getTodayStart()
        const groups: { label: string; icon: string; items: ReviewRecord[] }[] = []

        // New words remaining for today
        const newWordsStudiedToday = bookReviews.filter(r => r.lastReview >= todayStart && r.totalReviews === 1).length
        const remainingNew = Math.max(0, settings.dailyNewWords - newWordsStudiedToday)
        const allNewWords = bookReviews.filter(r => r.status === 'new')
        if (remainingNew > 0) {
          groups.push({ label: '待学习', icon: '🆕', items: allNewWords.slice(0, remainingNew) })
        }

        // Overdue
        const overdue = bookReviews.filter(r => r.nextReview < todayStart && r.status !== 'mastered' && r.status !== 'new')
        if (overdue.length > 0) {
          groups.push({ label: '已逾期', icon: '⏰', items: overdue.slice(0, 10) })
        }

        // Today & upcoming days
        for (let offset = 0; offset < 7; offset++) {
          const dayStart = todayStart + offset * DAY_MS
          const dayEnd = dayStart + DAY_MS
          const dayItems = bookReviews.filter(r => {
            if (r.status === 'mastered' || r.status === 'new') return false
            return r.nextReview >= dayStart && r.nextReview < dayEnd
          }).slice(0, 10)
          if (dayItems.length > 0) {
            const label = offset === 0 ? '今天' : offset === 1 ? '明天' : offset === 2 ? '后天' : `${offset}天后`
            groups.push({ label, icon: '📅', items: dayItems })
          }
        }

        return (
          <div style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
            animation: 'pop 0.25s ease',
          }} onClick={() => setShowSchedule(false)}>
            <div style={{
              background: 'white', width: '90%', maxWidth: 420, margin: '0 auto',
              borderRadius: 20, maxHeight: '80vh', overflow: 'auto', padding: 20,
            }} onClick={e => e.stopPropagation()}>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>📅 复习计划</h3>
              {groups.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: 20 }}>
                  暂无待复习单词 🎉
                </p>
              ) : groups.map(g => (
                <div key={g.label} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>
                    {g.icon} {g.label} ({g.items.length})
                  </div>
                  {g.items.map(r => {
                    const w = words.get(r.wordId)
                    if (!w) return null
                    const acc = r.totalReviews > 0 ? Math.round(r.correctCount / r.totalReviews * 100) : null
                    return (
                      <div key={r.wordId} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '8px 10px', marginBottom: 4, borderRadius: 8,
                        background: r.status === 'new' ? '#F0F8FF' : r.nextReview < todayStart ? '#FFF0F0' : '#F8F8FF',
                        fontSize: 13,
                      }}>
                        <div>
                          <span style={{ fontWeight: 700 }}>{w.word}</span>
                          <span style={{ color: 'var(--text-light)', marginLeft: 8, fontSize: 12 }}>
                            {r.status === 'new' ? '新词' : `间隔 ${r.interval} 天`}
                          </span>
                        </div>
                        {acc !== null && (
                          <span style={{
                            color: acc >= 80 ? 'var(--green)' : acc >= 50 ? 'var(--orange)' : 'var(--red)',
                            fontWeight: 600, fontSize: 12,
                          }}>
                            {acc}%
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 8 }}
                onClick={() => setShowSchedule(false)}
              >
                关闭
              </button>
            </div>
          </div>
        )
      })()}

      {/* Settings modal */}
      {showSettings && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
          animation: 'pop 0.25s ease',
        }} onClick={() => setShowSettings(false)}>
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
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowSettings(false)}>
                取消
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSaveSettings}>
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Test prompt modal */}
      {showTestPrompt && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
          animation: 'pop 0.25s ease',
        }}>
          <div style={{
            background: 'white', width: '85%', maxWidth: 360,
            borderRadius: 20, padding: 28, textAlign: 'center',
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>
              今日学习已完成！
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20 }}>
              要不要做个小测试巩固一下？包含选择题和拼写，共 {testWords.length * 2} 题
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                className="btn btn-outline"
                style={{ flex: 1 }}
                onClick={() => { setShowTestPrompt(false); setTestWords([]) }}
              >
                返回首页
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => { setShowTestPrompt(false); setTestActive(true) }}
              >
                开始测试 ✏️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
