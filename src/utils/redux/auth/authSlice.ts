import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getCookie } from '../../helpers'
import { AUTH_COOKIE } from '../../constants'

export type Store = {
  session: {
    isLoginIn: boolean
  }
}

const initialState: Store = {
  session: {
    isLoginIn: !!getCookie(AUTH_COOKIE)
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.session.isLoginIn = true
    },
    setLogout: (state) => {
      state.session.isLoginIn = false
    }
  }
})

export const selectAuth = (state: RootState) => state.authSlice
export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer
