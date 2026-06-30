export interface WordInflections {
  plural?: string
  thirdPerson?: string
  presentParticiple?: string
  pastTense?: string
  pastParticiple?: string
  comparative?: string
  superlative?: string
}

export interface WordDefinition {
  en: string
  zh?: string
}

export interface WordExample {
  sentence: string
  translation?: string
}

export interface WordRootAffix {
  prefix?: string
  root?: string
  suffix?: string
  explanation: string
}

export interface WordPhrase {
  phrase: string
  meaning: string
}

export interface Word {
  id: string
  word: string
  phonetic?: string
  syllables: string[]
  partOfSpeech: string
  definitions: WordDefinition[]
  examples: WordExample[]
  rootAffix?: WordRootAffix
  mnemonics?: string
  phrases?: WordPhrase[]
  inflections?: WordInflections
  synonyms?: { word: string; zh?: string }[]
  similarWords?: { word: string; reason?: string; zh?: string }[]
  frequency?: number
  tags?: string[]
}

export interface WordBook {
  id: string
  name: string
  description: string
  wordIds: string[]
  createdAt: number
}

export interface ReviewRecord {
  wordId: string
  bookId: string
  lastReview: number
  nextReview: number
  interval: number
  ease: number
  consecutiveCorrect: number
  status: 'new' | 'learning' | 'reviewing' | 'mastered'
  totalReviews: number
  correctCount: number
  wrongCount: number
}

export interface DailyLog {
  date: string
  newWords: number
  reviewedWords: number
  correctCount: number
  wrongCount: number
  studyMinutes: number
  checkedIn: boolean
}

export interface UserSettings {
  dailyNewWords: number
  dailyReviewGoal: number
}

export const defaultSettings: UserSettings = {
  dailyNewWords: 10,
  dailyReviewGoal: 20,
}

export interface TodayPlan {
  newToday: number
  allDue: number
  doneToday: number
  total: number
  streak: number
}

export interface DictationRecord {
  wordId: string
  date: number
  correct: boolean
}

export type TabName = 'home' | 'words' | 'practice' | 'stats' | 'profile'
