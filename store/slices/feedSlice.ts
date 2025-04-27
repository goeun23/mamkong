import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FeedItem {
    id:string
    content:string
    emotions:string[]
    aiResponse:string
    createdAt:string
}

const initialState:FeedItem[] = []

export const feedSlice = createSlice({
    name:"feed", 
    initialState, 
    reducers: {
        addFeed:(state, action:PayloadAction<FeedItem>)=> {
            state.unshift(action.payload)
        }, 
        resetFeed:()=> []
    }
})

export const {addFeed, resetFeed} = feedSlice.actions
export default feedSlice.reducer
export type {FeedItem}