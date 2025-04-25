// useRecoilState → useState로 교체 (간단 예시)
'use client'

import { toggleEmotion } from '@/store/slices/emtionSlice';

import type { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

const EMOTIONS = ['기쁨', '슬픔', '분노', '불안', '놀람', '사랑']

export default function EmotionSelector(){
    const dispatch = useDispatch();
    const selected = useSelector((state:RootState)=> state.emotion)

    return (
        <div className='flex flex-wrap gap-2'>
            {EMOTIONS.map((emotion)=> (
                 <button
                 key={emotion}
                 onClick={() => dispatch(toggleEmotion(emotion))}
                 className={`px-4 py-2 rounded-full border ${
                   selected.includes(emotion)
                     ? 'bg-blue-500 text-white'
                     : 'bg-white text-gray-800'
                 }`}
               >
                 {emotion}
               </button>
            ))}
        </div>
    )
}