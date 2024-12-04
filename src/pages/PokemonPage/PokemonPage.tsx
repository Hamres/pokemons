import React, { FC } from 'react';
import { useParams } from 'react-router';
import { getPokemonId } from '../../utils/helpers/getPokemonId';
import { useRequestPokemonByIdQuery } from '../../utils/api/hooks/useRequestPokemonByIdQuery';

import './PokemonPage.css';

const PokemonPage: FC = () => {
  const pokemonId = useParams();

  const id = Number(pokemonId.id);

  const requestPokemonByIdQuery = useRequestPokemonByIdQuery({
    id
  });

  const isPokemonData = !!requestPokemonByIdQuery.data && !requestPokemonByIdQuery.isLoading;
  return (
    <div className='wrapper'>
      <div className='container'>
        <div>
          <h1 className='krug'>sdadwadwadawdawd</h1>
        </div>
        {!isPokemonData && <div>Loading...</div>}
        {isPokemonData && (
          <>
            <div>{getPokemonId(id)}</div>
            <div>{requestPokemonByIdQuery.data.data.name}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonPage;
