import { createSlice } from '@reduxjs/toolkit'

export const yearSlice = createSlice({
  name: 'yearSlice',
  initialState: {
    year: '1',
    month: '1',
    day: '1',
    dayInEng: 'Eng',
  },
  reducers: {
    addYear: (state, action) => {
      state.year = action.payload
    },
    addMonth: (state, action) => {
      state.month = action.payload
    },
    addDay: (state, action) => {
      state.day = action.payload
    },
    addDayInEng: (state, action) => {
      state.dayInEng = action.payload
    },
  },
})

export const { addYear, addMonth, addDay, addDayInEng } = yearSlice.actions

export default yearSlice.reducer