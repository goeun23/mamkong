import { configureStore } from "@reduxjs/toolkit";
import emotionReducer from './slices/emtionSlice'
import diaryReducer from './slices/diarySlice'

export const store = configureStore({
    reducer: {
        emotion:emotionReducer, 
        diary:diaryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch