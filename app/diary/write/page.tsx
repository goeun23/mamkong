// app/diary/write/page.tsx
'use client'

import DiaryInput from '@/components/DiaryInput'
import EmotionSelector from '@/components/EmotionSelector'
import SubmitButton from '@/components/SubmitButton'
import AIResponseCard from '@/components/AIResponseCard'
import Header from '@/components/Header'
import type { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'
import FeedCard from '@/components/FeedCard'

export default function DiaryWritePage(): JSX.Element {
    const feedList = useSelector((state:RootState)=> state.feed)
  return (
    
    <main className="min-h-screen bg-gray-100">
        <Header/>
      <div className="flex justify-between mx-auto max-w-[1400px] px-4">
        {/* 왼쪽 사이드바 */}
        <aside className="hidden lg:block w-[280px] pt-10 text-sm text-gray-600">
          <div className="sticky top-10">
            <ul className="space-y-3">
              <li className="font-semibold">최고은님</li>
              <li>친구</li>
              <li>저장의 오늘</li>
              <li>피드</li>
              <li>이벤트</li>
            </ul>
          </div>
        </aside>

        {/* 중앙 피드 */}
        <section className="w-full max-w-[600px] flex flex-col gap-6 py-8">
          {/* 글쓰기 영역 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <DiaryInput />
            <EmotionSelector />
            <SubmitButton />
          </div>

          {/* AI 응답 영역 */}
          <AIResponseCard />
          {/* Feed 리스트 */}
            {feedList.map((item) => (
                <FeedCard key={item.id} item={item} />
            ))}
        </section>

        {/* 오른쪽 사이드바 */}
        <aside className="hidden xl:block w-[280px] pt-10 text-sm text-gray-600">
          <div className="sticky top-10">
            <p className="font-semibold mb-3">연락처</p>
            <ul className="space-y-2">
              <li>김성환</li>
              <li>이도형</li>
              <li>정지후</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}