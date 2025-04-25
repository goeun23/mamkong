// recoil/emotionAtom.ts
import { atom } from 'recoil'

export const selectedEmotionState = atom<string[]>({
  key: 'selectedEmotionState',
  default: [],
})
