import { createSlice } from '@reduxjs/toolkit'

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState: {
    points: 1,
  },
  reducers: {
    increment: (state) => {
     
      state.points += 1
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment} = bonusSlice.actions

export default bonusSlice.reducer