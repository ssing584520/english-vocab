export function speakWord(word: string, rate = 0.8): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'))
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-US'
    utterance.rate = rate
    utterance.onend = () => resolve()
    utterance.onerror = () => reject(new Error('Speech error'))
    window.speechSynthesis.speak(utterance)
  })
}

export function speakSentence(sentence: string, rate = 0.7): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'))
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(sentence)
    utterance.lang = 'en-US'
    utterance.rate = rate
    utterance.onend = () => resolve()
    utterance.onerror = () => reject(new Error('Speech error'))
    window.speechSynthesis.speak(utterance)
  })
}
