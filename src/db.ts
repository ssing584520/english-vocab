import Dexie, { type Table } from 'dexie'
import type { Word, WordBook, ReviewRecord, DailyLog, DictationRecord } from './types'

export class WordDatabase extends Dexie {
  words!: Table<Word, string>
  wordBooks!: Table<WordBook, string>
  reviews!: Table<ReviewRecord, string>
  dailyLogs!: Table<DailyLog, string>
  dictations!: Table<DictationRecord, number>

  constructor() {
    super('PonyVocabDB')
    this.version(3).stores({
      words: 'id, word, partOfSpeech',
      wordBooks: 'id, name',
      reviews: '[wordId+bookId], nextReview, status',
      dailyLogs: 'date',
      dictations: '++id, wordId, date',
    })
  }
}

export const db = new WordDatabase()
