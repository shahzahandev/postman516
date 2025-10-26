import { configureStore } from '@reduxjs/toolkit'
import  userSlice from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    userInfo: userSlice
  },
})