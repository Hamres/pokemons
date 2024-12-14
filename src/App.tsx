import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import { AuthPage, PokedexPage, PokemonPage, PokemonsPage, ProfilePage } from './pages'
import { ROUTES } from './utils/constants'
import { Layout } from './common/layout'
import { selectAuth } from './utils/redux/auth/authSlice'
import { useSelector } from 'react-redux'

export const AuthApp = () => (
  <Routes>
    <Route path={ROUTES.AUTH} element={<AuthPage />} />
    <Route path='*' element={<Navigate to={ROUTES.AUTH} />} />
  </Routes>
)

const App = () => {
  const {
    session: { isLoginIn }
  } = useSelector(selectAuth)

  return (
    <>
      {!isLoginIn && <AuthApp />}
      {isLoginIn && (
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.POKEDEX} element={<PokedexPage />} />
            <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path='*' element={<Navigate to={ROUTES.POKEMONS} />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App
