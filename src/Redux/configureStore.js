import { configureStore } from '@reduxjs/toolkit'
import yearSlice  from './getFull/getFull'

export const store = configureStore({
  reducer: {
    yearSlice: yearSlice
  },
})
