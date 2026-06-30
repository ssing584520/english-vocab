import type { UserSettings } from './types'
import { defaultSettings } from './types'

const KEY = 'ponyvocab_settings'

export function loadSettings(): UserSettings {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...defaultSettings, ...JSON.parse(raw) }
  } catch {}
  return { ...defaultSettings }
}

export function saveSettings(s: Partial<UserSettings>): UserSettings {
  const current = loadSettings()
  const merged = { ...current, ...s }
  localStorage.setItem(KEY, JSON.stringify(merged))
  return merged
}
