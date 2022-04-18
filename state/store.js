import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slice/customerSlice'
import institutionSlice from './slice/institutionSlice'

export const store = configureStore({
  reducer: {
   institution:institutionSlice,
   customer:customerSlice
  },
})

