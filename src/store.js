import { configureStore } from '@reduxjs/toolkit'
import  userSlice from './slices/counterSlice'
import  activeSlice from './slices/activeSlice'

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    activeChatInfo: activeSlice
  },
})