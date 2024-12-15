import React from 'react'
import { setLogout } from '../../utils/redux/auth/authSlice'
import styles from './ProfilePage.module.css'
import { useAuthState, useLogoutMutation, useUpdateDocumentMutation } from '../../utils/firebase'
import { useAppDispatch } from '../../utils/redux/store'
import { deleteCookie } from '../../utils/helpers'
import { AUTH_COOKIE } from '../../utils/constants'
import { PokemonId } from '../index'

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const authState = useAuthState()

  const logoutMutation = useLogoutMutation()

  const updateDocumentMutation = useUpdateDocumentMutation({})

  if (!authState.data) return null
  const user = authState.data

  const handleButton = (chainId: number) => {
    updateDocumentMutation.mutate({
      collection: 'users',
      data: {
        pokemons: [...user.pokemons.filter((obj) => obj.id !== chainId)]
      },
      id: user.uid
    })
  }

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
            <div>Teams:</div>
            {user.pokemons.length >= 1 ? (
              <div className={styles.teamCard}>
                {user.pokemons.map((pokemon) => {
                  return (
                    <PokemonId
                      handleButton={handleButton}
                      key={pokemon.id}
                      chainId={pokemon.id}
                      pokemonName={pokemon.name}
                    />
                  )
                })}
              </div>
            ) : (
              <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                There is no one on the team yet
              </div>
            )}
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
