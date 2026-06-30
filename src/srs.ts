import type { ReviewRecord } from './types'

/** Classic Ebbinghaus forgetting curve intervals (days) */
export const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30, 60]

export function getEbbinghausInterval(stage: number): number {
  if (stage <= 0) return 0
  if (stage > EBBINGHAUS_INTERVALS.length) return EBBINGHAUS_INTERVALS[EBBINGHAUS_INTERVALS.length - 1]
  return EBBINGHAUS_INTERVALS[stage - 1]
}

export function createReviewRecord(wordId: string, bookId: string): ReviewRecord {
  return {
    wordId,
    bookId,
    lastReview: 0,
    nextReview: Date.now(),
    interval: 0,
    ease: 2.5,
    consecutiveCorrect: 0,
    status: 'new',
    totalReviews: 0,
    correctCount: 0,
    wrongCount: 0,
  }
}

export function updateReviewRecord(record: ReviewRecord, correct: boolean): ReviewRecord {
  const newRecord = { ...record }
  newRecord.totalReviews++
  newRecord.lastReview = Date.now()

  if (correct) {
    newRecord.correctCount++
    newRecord.consecutiveCorrect++
    newRecord.interval = getEbbinghausInterval(newRecord.consecutiveCorrect)
  } else {
    newRecord.wrongCount++
    newRecord.consecutiveCorrect = 0
    newRecord.interval = 1
  }

  const now = new Date()
  now.setDate(now.getDate() + newRecord.interval)
  now.setHours(8, 0, 0, 0)
  newRecord.nextReview = now.getTime()

  if (newRecord.consecutiveCorrect >= 7) {
    newRecord.status = 'mastered'
  } else if (newRecord.consecutiveCorrect >= 1) {
    newRecord.status = 'reviewing'
  } else {
    newRecord.status = 'learning'
  }

  return newRecord
}

export function getDueReviews(reviews: ReviewRecord[]): ReviewRecord[] {
  const now = Date.now()
  return reviews.filter(r => r.nextReview <= now && r.status !== 'mastered')
}

export function getTodayStart(): number {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

export function getTodayPlan(reviews: ReviewRecord[], dailyNewWords: number) {
  const now = Date.now()
  const todayTs = getTodayStart()

  const newWords = reviews.filter(r => r.status === 'new')
  const dueReviews = reviews.filter(r =>
    r.nextReview <= now && r.status !== 'mastered' && r.status !== 'new'
  )

  const newToday = Math.min(newWords.length, dailyNewWords)
  const doneToday = reviews.filter(r => r.lastReview >= todayTs).length

  return {
    newToday,
    allDue: dueReviews.length,
    doneToday,
    total: newToday + dueReviews.length,
  }
}

export function buildSessionQueue(reviews: ReviewRecord[], dailyNewWords: number, wordOrder?: string[]): ReviewRecord[] {
  const now = Date.now()
  let newWords = reviews.filter(r => r.status === 'new')
  if (wordOrder) {
    const orderIndex = new Map(wordOrder.map((id, i) => [id, i]))
    newWords.sort((a, b) => (orderIndex.get(a.wordId) ?? 999) - (orderIndex.get(b.wordId) ?? 999))
  }
  newWords = newWords.slice(0, dailyNewWords)
  const dueReviews = reviews.filter(r =>
    r.nextReview <= now && r.status !== 'mastered' && r.status !== 'new'
  )
  return [...newWords, ...dueReviews]
}

export function formatDate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export async function calcStreak(dailyLogs: { date: string; checkedIn?: boolean }[]): Promise<number> {
  const today = new Date()
  const todayStr = formatDate(today)

  const logMap = new Map(dailyLogs.map(l => [l.date, l.checkedIn ?? false]))

  if (!logMap.get(todayStr)) return 0

  let streak = 1
  for (let i = 1; i < 365; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    if (logMap.get(formatDate(d))) {
      streak++
    } else {
      break
    }
  }
  return streak
}

export function getTodayStats(reviews: ReviewRecord[]) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayTs = today.getTime()

  const todayReviews = reviews.filter(r => r.lastReview >= todayTs)
  const reviewed = todayReviews.length
  const correct = todayReviews.filter(r => r.status !== 'new').reduce((s, r) => s + r.correctCount, 0)
  const wrong = todayReviews.filter(r => r.status !== 'new').reduce((s, r) => s + r.wrongCount, 0)

  return { reviewed, correct, wrong }
}
