import React, { FC } from 'react';

interface PokemonProps {
  pokemon: any;
}

const PokemonsPage: FC<PokemonProps> = ({ pokemon }) => {

  return (
    <div className='flex justify-center flex-col shadow-md rounded bg-neutral-200 p-10 w-94'>
      <img src={pokemon.sprites.front_default} alt='pokemon img' />
      <h2 className='w-full text-left capitalize font-semibold text-2xl'>
        {pokemon.name}
      </h2>
    </div>
  );
};

export default PokemonsPage;
