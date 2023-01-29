import { createSlice } from '@reduxjs/toolkit'

const initialState = '123'

export const getFullSlice = createSlice({
  name: 'getFull',
  initialState,
  reducers: {
    selectedFullDate: (state, action) => {
      return state = action.payload
    },
  },
})

export const { selectedFullDate } = getFullSlice.actions

export default getFullSlice.reducer