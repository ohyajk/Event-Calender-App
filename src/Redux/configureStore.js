import { configureStore } from '@reduxjs/toolkit'
import selectedReducer  from './getFull/getFull'

export const store = configureStore({
  reducer: {
    selected: selectedReducer
  },
})
