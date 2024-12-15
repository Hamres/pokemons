import React from 'react'

import styles from './PokemonId.module.css'
import { PokemonType } from '../../types'
import { useRequestPokemonByIdQuery } from '../../utils/api/hooks'
import { getPokemonId } from '../../utils/helpers'

interface PokemonEvolutionChainProps {
  chainId: number
  pokemonName: PokemonType['name']
  handleButton: (chainId: number) => void
}

const PokemonId: React.FC<PokemonEvolutionChainProps> = ({ chainId: chainId, handleButton }) => {
  const { data: pokemonData, isLoading: pokemonIdLoading } = useRequestPokemonByIdQuery({
    id: chainId
  })

  const isPokemonData = !!pokemonData && !pokemonIdLoading
  if (!isPokemonData) return null

  return (
    <div className={styles.container}>
      {!pokemonData && <div>Loading...</div>}
      {pokemonData && (
        <div className={styles.pokemonCard}>
          <div>{getPokemonId(chainId)}</div>
          <div>{pokemonData.data.name}</div>
          <div className={styles.img_container}>
            <img
              className='pokemonImg'
              src={pokemonData.data.sprites.other.home.front_default}
              alt='pokemon img'
            />
          </div>
          <button className={styles.deleteButton} onClick={() => handleButton(chainId)}>
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default PokemonId
