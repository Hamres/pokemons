import React, { FC } from 'react';
import { useRequestPokemonByIdQuery } from '../../../utils/api/hooks';
import { getPokemonId } from '../../../utils/helpers/getPokemonId';
import { PokemonType } from '../../../types';

import styles from './PokemonInfo.module.css'


interface PokemonInfoProps {
  id: PokemonType['id'];
}

export const PokemonInfo: FC<PokemonInfoProps> = ({ id }) => {
  const { data, isLoading } = useRequestPokemonByIdQuery({ id });
  if (isLoading || !data) return <div>Loading...</div>;

  const selectedPokemon = data.data;
  const pokemonStats = data.data.stats;
  const pokemonAbilities = data.data.abilities;

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
                );
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};