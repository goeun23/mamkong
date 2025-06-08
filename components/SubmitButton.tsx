import { setAIResponse } from "@/store/slices/aiSlice";
import { addFeed } from "@/store/slices/feedSlice";
import { useGenerateFromGemini } from '@/hooks/useGemini'

import type { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuidv4} from 'uuid'


export default function SubmitButton():JSX.Element {
    const dispatch = useDispatch()
    const generateAI = useGenerateFromGemini()

    const emotions = useSelector((state:RootState)=> state.emotion)
    const diary = useSelector((state:RootState)=> state.diary.content)

    const handleSubmit = async () => {
        if (!diary.trim()) {
          alert('일기를 작성해주세요.')
          return
        }
    
        // ✅ 감정 + 일기를 하나의 prompt로 전달
        const prompt = `${diary}\n\n[감정: ${emotions.join(', ')}]에 대한한 공감과 위로가 담긴 짧은 문장을 작성해줘.`
    
        try {
          const aiResponse = await generateAI.mutateAsync(prompt)
          
    
          // ✅ 1. AI 응답을 Redux에 저장
          dispatch(setAIResponse(aiResponse))
    
          // ✅ 2. 피드에 추가
          dispatch(
            addFeed({
              id: uuidv4(),
              content: diary,
              emotions,
              aiResponse,
              createdAt: new Date().toISOString(),
            })
          )
        } catch (error) {
          console.error('AI 생성 실패', error)
          alert('AI 응답을 생성할 수 없습니다. 다시 시도해주세요.')
        }
      }
    

    return (
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            작성 완료
          </button>
        </div>
      )
}


