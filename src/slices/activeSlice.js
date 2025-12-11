import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    activeInfo: (state, actions) => {
       state.value = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { activeInfo } = activeSlice.actions

export default activeSlice.reducer