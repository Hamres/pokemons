import React, { FC, useEffect, useRef, useState } from 'react'
import { ILastResults, PokemonType } from '../../types'

import styles from './PokemonsPage.module.css'
import { useRequestPokemonInfiniteQuery } from '../../utils/api/hooks'
import { getPokemonId } from '../../utils/helpers/getPokemonId'
import { PokemonInfo } from './PokemonInfo/PokemonInfo'
import { useInView } from '../../utils/hooks'

const PokemonsPage: FC = () => {
  const [pokemonId, setPokemonId] = useState<PokemonType['id'] | null>(null)
  const { data, fetchNextPage, isLoading } = useRequestPokemonInfiniteQuery({})

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      fetchNextPage()
    }
  }, [isInView])

  if (isLoading || !data) return <div>Loading...</div>

  const pokemons: ILastResults[] = data.pages.reduce(
    (pokemons: ILastResults[], { data }) => [...pokemons, ...data.results],
    []
  )

  return (
    <div className='container'>
      <div className={styles.pokemons_container}>
        {pokemons.map((pokemon, index) => {
          const id = index + 1

          return (
            <div
              key={index}
              className={styles.pokemon_container}
              onClick={() => {
                if (pokemonId === id) {
                  return id
                }
                setPokemonId(id)
              }}
            >
              <div className={styles.pokemon}>
                <div className={styles.pokemon_name}>{pokemon.name}</div>
                <div>{getPokemonId(id)}</div>
              </div>
              {pokemonId === id && (
                <div className={styles.pokemon_info}>
                  <PokemonInfo id={id} onClose={() => setPokemonId(null)} />
                </div>
              )}
            </div>
          )
        })}
        <div ref={ref} />
      </div>
    </div>
  )
}

export default PokemonsPage
