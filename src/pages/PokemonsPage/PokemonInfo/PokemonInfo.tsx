import React, { FC } from 'react'
import { useRequestPokemonByIdQuery } from '../../../utils/api/hooks'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import { PokemonType } from '../../../types'

import styles from './PokemonInfo.module.css'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../../utils/redux/auth/authSlice'
import { useAuthState } from '../../../utils/firebase'
import { useUpdateDocumentMutation } from '../../../utils/firebase/hooks/useUpdateDocumentMutation'

interface PokemonInfoProps {
  id: PokemonType['id']
  onClose: () => void
}

export const PokemonInfo: FC<PokemonInfoProps> = ({ id, onClose }) => {
  const { session } = useSelector(selectAuth)
  const authState = useAuthState()
  const updateDocumentMutation = useUpdateDocumentMutation({
    options: {
      onSuccess: () => {
        onClose()
      }
    }
  })

  const navigate = useNavigate()
  const requestPokemonByIdQuery = useRequestPokemonByIdQuery({ id })

  if (requestPokemonByIdQuery.isLoading || !requestPokemonByIdQuery.data?.data || !authState.data) {
    return <div>Loading...</div>
  }

  const pokemonStats = requestPokemonByIdQuery.data.data.stats
  const pokemonAbilities = requestPokemonByIdQuery.data.data.abilities
  const selectedPokemon = requestPokemonByIdQuery.data.data

  const user = authState.data

  const MAX_USER_POKEMONS = 6

  const isShowAddButton =
    session.isLoginIn &&
    authState.data.pokemons.length < MAX_USER_POKEMONS &&
    !authState.data.pokemons.some((pokemon) => id === pokemon.id)

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card_top}>
          <div className={styles.card_top_name}>
            <div className={styles.card_top_name__name}>{selectedPokemon.name}</div>
            <div className={styles.card_top_name__id}>{getPokemonId(id)}</div>
          </div>
          <div className={styles.card_top_image}>
            <img src={selectedPokemon.sprites.other.home.front_default ?? ''} alt='pokemon' />
          </div>
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.card_bottom_status}>
            <span className={styles.card_bottom_span}>Stats</span>
            <div>
              {pokemonStats.map((stat) => {
                return (
                  <p className={styles.card_bottom_p} key={stat.stat.url}>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                )
              })}
            </div>
          </div>
          <div className={styles.card_bottom_habilidades}>
            <span className={styles.card_bottom_span}>Abilities</span>
            <div>
              {pokemonAbilities.map((el) => {
                return (
                  <p className={styles.card_bottom_p} key={el.ability.url}>
                    {el.ability.name}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
        {isShowAddButton && (
          <button
            disabled={updateDocumentMutation.isLoading}
            className={styles.Button}
            onClick={() =>
              updateDocumentMutation.mutate({
                collection: 'users',
                data: {
                  pokemons: [
                    ...user.pokemons,
                    {
                      id: selectedPokemon.id,
                      name: selectedPokemon.name,
                      image: selectedPokemon.sprites.front_default
                    }
                  ]
                },
                id: user.uid
              })
            }
          >
            Add to team
          </button>
        )}
        <button onClick={() => navigate(`/pokemon/${id}`)} className={styles.Button}>
          Open
        </button>
      </div>
    </div>
  )
}
