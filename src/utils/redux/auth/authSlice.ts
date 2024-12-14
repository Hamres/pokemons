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
    // setStore: (state, action: PayloadAction<any>) => {
    //   state.session.isLoginIn = action.payload.session
    //   state.user = action.payload.user
    // },
    setLogout: (state) => {
      state.session.isLoginIn = false
      // state.user = {} as User
    }
  }
})

export const selectAuth = (state: RootState) => state.authSlice
export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer
