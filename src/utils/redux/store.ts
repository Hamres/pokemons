import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
