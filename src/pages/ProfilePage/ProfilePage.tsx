import React from 'react'
import { setLogout } from '../../utils/redux/auth/authSlice'
import styles from './ProfilePage.module.css'
import { useAuthState, useLogoutMutation } from '../../utils/firebase'
import { useAppDispatch } from '../../utils/redux/store'
import { deleteCookie } from '../../utils/helpers'
import { AUTH_COOKIE } from '../../utils/constants'
import { PokemonId } from '../index'

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const authState = useAuthState()

  const logoutMutation = useLogoutMutation()

  if (!authState.data) return null
  const user = authState.data

  return (
    <div className='container'>
      <div className={styles.page}>
        <div className={styles.aboutUser}>
          <div>name: {user.displayName}</div>
          <div>uid: {user.uid}</div>
          <div>email: {user.email}</div>
          <button
            className={styles.logoutButton}
            onClick={() => {
              logoutMutation.mutate({})
              dispatch(setLogout())
              deleteCookie(AUTH_COOKIE)
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className={styles.team}>
        {!!user ? (
          <>
            <div>Teams</div>
            <div className={styles.teamCard}>
              {user.pokemons.map((pokemon) => {
                return (
                  <PokemonId key={pokemon.id} chainId={pokemon.id} pokemonName={pokemon.name} />
                )
              })}
            </div>
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
