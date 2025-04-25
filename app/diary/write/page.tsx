'use client'

import EmotionSelector from '@/components/EmotionSelector'

export default function DiaryWritePage(): JSX.Element {
  return (
    <main className="p-6">
      <div className="w-full max-w-2xl py-8">
        <DiaryInput />
        <EmotionSelector />
        <SubmitButton />
        <AIResponseCard />
      </div>
    </main>
  )
}
