import type { Word } from './types'

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u'])

/** Word split overrides for words that don't follow simple rules */
const KNOWN_SPLITS: Record<string, string[]> = {
  able: ['a','ble'],
  address: ['ad','dress'],
  afternoon: ['af','ter','noon'],
  again: ['a','gain'],
  alone: ['a','lone'],
  animal: ['a','ni','mal'],
  answer: ['an','swer'],
  baby: ['ba','by'],
  beautiful: ['beau','ti','ful'],
  become: ['be','come'],
  begin: ['be','gin'],
  bicycle: ['bi','cy','cle'],
  bottle: ['bot','tle'],
  breakfast: ['break','fast'],
  carry: ['car','ry'],
  city: ['cit','y'],
  country: ['coun','try'],
  cover: ['cov','er'],
  dinner: ['din','ner'],
  early: ['ear','ly'],
  easy: ['eas','y'],
  enjoy: ['en','joy'],
  evening: ['eve','ning'],
  excuse: ['ex','cuse'],
  expensive: ['ex','pen','sive'],
  family: ['fa','mi','ly'],
  finish: ['fin','ish'],
  flower: ['flow','er'],
  funny: ['fun','ny'],
  garden: ['gar','den'],
  heavy: ['heav','y'],
  kitchen: ['kitch','en'],
  lady: ['la','dy'],
  lesson: ['les','son'],
  letter: ['let','ter'],
  listen: ['lis','ten'],
  little: ['lit','tle'],
  market: ['mar','ket'],
  minute: ['min','ute'],
  mirror: ['mir','ror'],
  money: ['mon','ey'],
  monkey: ['mon','key'],
  morning: ['morn','ing'],
  music: ['mu','sic'],
  number: ['num','ber'],
  open: ['o','pen'],
  parent: ['par','ent'],
  pencil: ['pen','cil'],
  people: ['peo','ple'],
  pocket: ['pock','et'],
  potato: ['po','ta','to'],
  pretty: ['pret','ty'],
  problem: ['prob','lem'],
  question: ['ques','tion'],
  ready: ['read','y'],
  season: ['sea','son'],
  snowy: ['snow','y'],
  station: ['sta','tion'],
  story: ['sto','ry'],
  student: ['stu','dent'],
  study: ['stud','y'],
  sugar: ['su','gar'],
  table: ['ta','ble'],
  today: ['to','day'],
  together: ['to','geth','er'],
  understand: ['un','der','stand'],
  vegetable: ['veg','ta','ble'],
  visit: ['vis','it'],
  water: ['wa','ter'],
  yesterday: ['yes','ter','day'],
}

function hasVowel(s: string): boolean {
  for (const ch of s) {
    if (VOWELS.has(ch)) return true
  }
  return false
}

/** Count vowel groups (consecutive vowels = 1 sound) */
function countVowelGroups(w: string): number {
  let count = 0
  let i = 0
  while (i < w.length) {
    if (VOWELS.has(w[i])) {
      count++
      while (i < w.length && VOWELS.has(w[i])) i++
    } else {
      i++
    }
  }
  return count
}

export function splitIntoSyllables(word: string): string[] {
  const w = word.toLowerCase().trim()
  if (w.length <= 2) return [w]
  if (KNOWN_SPLITS[w]) return KNOWN_SPLITS[w]

  const groups = countVowelGroups(w)
  if (groups <= 1) return [w]

  // For multi-vowel words, try to split between vowel groups
  // Find positions of vowel group boundaries
  const boundaries: number[] = []
  let i = 0
  while (i < w.length) {
    if (VOWELS.has(w[i])) {
      const start = i
      while (i < w.length && VOWELS.has(w[i])) i++
      boundaries.push(start)
      boundaries.push(i)
    } else {
      i++
    }
  }

  // Split at midpoints between vowel groups
  const result: string[] = []
  let prevEnd = 0

  for (let idx = 0; idx < boundaries.length - 2; idx += 2) {
    const vgEnd = boundaries[idx + 1]
    const nextVgStart = boundaries[idx + 2]
    const between = w.slice(vgEnd, nextVgStart)

    if (between.length <= 1) {
      // 0 or 1 consonant: V·CV (consonant goes with next)
      if (vgEnd > prevEnd) {
        result.push(w.slice(prevEnd, vgEnd))
        prevEnd = vgEnd
      }
    } else {
      // 2+ consonants: VC·CV (first consonant stays)
      result.push(w.slice(prevEnd, vgEnd + 1))
      prevEnd = vgEnd + 1
    }
  }

  if (prevEnd < w.length) {
    result.push(w.slice(prevEnd))
  }

  return result.filter(s => s.length > 0)
}

export function displaySyllables(word: string): string {
  return splitIntoSyllables(word).join(' · ')
}

const SYLLABLE_COLORS = ['#F5A0D0', '#5D9CEC', '#A0D6A0', '#F5C080', '#9B59B6', '#F5D76E']

export function displaySyllablesColored(word: string): { text: string; color: string }[] {
  return splitIntoSyllables(word).map((s, i) => ({
    text: s,
    color: SYLLABLE_COLORS[i % SYLLABLE_COLORS.length],
  }))
}

/** Returns syllables from stored word data if available, otherwise computed */
export function getWordSyllables(word: Word): string[] {
  if (word.syllables && word.syllables.length > 0) {
    return word.syllables
  }
  return splitIntoSyllables(word.word)
}
