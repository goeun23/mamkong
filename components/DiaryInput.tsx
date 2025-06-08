import type { RootState } from "@/store";
import { setDiary } from "@/store/slices/diarySlice";
import { useDispatch, useSelector } from "react-redux";

export default function DiaryInput():JSX.Element {
    const dispath = useDispatch()
    const diary = useSelector((state:RootState)=> state.diary.content)
    
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        dispath(setDiary(e.target.value))
    }

    return (
        <div className="mp-6">
            <textarea className="w-full min-h-[150px] p-4 border rounded-md resize-none"
            placeholder="오늘 하루는 어땠나요?"
            value={diary}
            onChange={handleChange}
            name="" id=""></textarea>
        </div>
    )
    
}