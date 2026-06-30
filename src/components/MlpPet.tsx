import { useState } from 'react'

const pets = [
  { emoji: '🦄', name: '紫悦', desc: 'Twilight Sparkle 用魔法帮你记单词！' },
  { emoji: '🌸', name: '碧琪', desc: 'Pinkie Pie 让背单词变成派对！' },
  { emoji: '🌈', name: '云宝', desc: 'Rainbow Dash 带你飞越词汇障碍！' },
  { emoji: '💎', name: '珍奇', desc: 'Rarity 让你单词记住就忘不掉！' },
  { emoji: '🍎', name: '苹果嘉儿', desc: 'Applejack 说勤劳就能记住！' },
  { emoji: '🦋', name: '柔柔', desc: 'Fluttershy 温柔地帮你复习单词~' },
]

interface Props {
  size?: 'small' | 'large'
  onClick?: () => void
}

export default function MlpPet({ size = 'small', onClick }: Props) {
  const [idx, setIdx] = useState(0)
  const [showTip, setShowTip] = useState(false)

  const pet = pets[idx % pets.length]

  function handleClick() {
    if (onClick) { onClick(); return }
    setIdx(i => (i + 1) % pets.length)
    setShowTip(true)
    setTimeout(() => setShowTip(false), 2500)
  }

  const emojiSize = size === 'large' ? 80 : 44

  return (
    <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handleClick}>
      <div style={{
        fontSize: emojiSize,
        animation: 'float 3s ease-in-out infinite',
        filter: 'drop-shadow(0 4px 8px rgba(154,89,182,0.2))',
        transition: 'transform 0.2s',
      }}>
        {pet.emoji}
      </div>
      {showTip && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--purple)',
          color: 'white',
          padding: '6px 12px',
          borderRadius: 8,
          fontSize: 12,
          whiteSpace: 'nowrap',
          animation: 'pop 0.3s ease',
          zIndex: 10,
        }}>
          {pet.name}：{pet.desc}
        </div>
      )}
      {size === 'large' && (
        <div style={{ textAlign: 'center', marginTop: 4, fontWeight: 700, fontSize: 14, color: 'var(--purple)' }}>
          {pet.name}
        </div>
      )}
    </div>
  )
}
