import React, { FC } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getPokemonId } from '../../utils/helpers/getPokemonId'
import { useRequestPokemonByIdQuery } from '../../utils/api/hooks/useRequestPokemonByIdQuery'

import './PokemonPage.css'

const PokemonPage: FC = () => {
  const navigate = useNavigate()
  const pokemonId = useParams()

  const id = Number(pokemonId.id)

  const requestPokemonByIdQuery = useRequestPokemonByIdQuery({
    id
  })

  const isPokemonData = !!requestPokemonByIdQuery.data && !requestPokemonByIdQuery.isLoading
  return (
    <div className='wrapper'>
      <div className='container'>
        {!isPokemonData && <div>Loading...</div>}
        {isPokemonData && (
          <div className='pokemonCard'>
            <div>{getPokemonId(id)}</div>
            <div>{requestPokemonByIdQuery.data.data.name}</div>
            <div>
              <img
                className='pokemonImg'
                src={requestPokemonByIdQuery.data.data.sprites.other.home.front_default}
                alt='pokemon img'
              />
            </div>
            <button className='backButton' onClick={() => navigate(`/pokemons`)}>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PokemonPage
