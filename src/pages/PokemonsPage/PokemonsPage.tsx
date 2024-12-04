import React, { FC, useEffect, useState } from 'react';
import { ILastResults, PokemonType } from '../../types';
import { useInView } from 'react-intersection-observer';

import styles from './PokemonsPage.module.css';
import { useRequestPokemonByIdQuery, useRequestPokemonInfiniteQuery } from '../../utils/api/hooks';
import { getPokemonId } from '../../utils/helpers/getPokemonId';
import { useNavigate } from 'react-router';
import { PokemonInfo } from './PokemonInfo/PokemonInfo';

const PokemonsPage: FC = () => {
  const navigate = useNavigate()
  const [pokemonId, setPokemonId] = useState<PokemonType['id'] | null>(null);
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isLoading } = useRequestPokemonInfiniteQuery({});

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading || !data) return <div>Loading...</div>;

  const pokemons: ILastResults[] = data.pages.reduce(
    (pokemons: ILastResults[], { data }) => [...pokemons, ...data.results],
    []
  );

  return (
    <div className='container'>
      <div className={styles.pokemons_container}>
        {pokemons.map((pokemon, index) => {
          const id = index + 1;

          return (
            <div
              key={index}
              className={styles.pokemon_container}
              onClick={() => {
                if(pokemonId === id ) {
                  return navigate(`/pokemon/${id}`)
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
                  <PokemonInfo id={id} />
                </div>
              )}
            </div>
          );
        })}
        <div ref={ref} />
      </div>
    </div>
  );
};

export default PokemonsPage;
