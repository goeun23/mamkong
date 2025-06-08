import { configureStore } from "@reduxjs/toolkit";
import emotionReducer from './slices/emtionSlice'
import diaryReducer from './slices/diarySlice'
import aiReducer from './slices/aiSlice'
import feedReducer from './slices/feedSlice'

export const store = configureStore({
    reducer: {
        emotion:emotionReducer, 
        diary:diaryReducer, 
        ai:aiReducer, 
        feed:feedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch