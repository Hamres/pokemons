import React, { FC, useState } from 'react';
import styles from './PokedexPage.module.css'
import classNames from 'classnames';
import { PokemonType } from '../../types';
import { useRequestPokemonsQueries } from '../../utils/api/hooks';
import { getPokemonId } from '../../utils/helpers/getPokemonId';

const PokedexPage: FC = () => {
  const [offset, setOffset] = useState(6);
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const results = useRequestPokemonsQueries({ offset });
  const isLoading = results.some((result: any) => result.isLoading);

  if (isLoading) return <div>Loading...</div>;

  const pokemons: PokemonType[] = results.map((result: any) => (result.data.data))
  const selectedPokemon = pokemons.find((pokemon) => selectedPokemonId === pokemon.id)


  if (!selectedPokemon) return <div>Error</div>

  const pokemonStats = selectedPokemon.stats
  const pokemonAbilities = selectedPokemon.abilities

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.card_top}>
            <div className={styles.card_top_name}>
              <div className={styles.card_top_name__name}>{selectedPokemon.name}</div>
              <div className={styles.card_top_name__id}>{getPokemonId(selectedPokemon.id)}</div>
            </div>
            <div className={styles.card_top_image}>
              <img src={selectedPokemon.sprites.other.home.front_default ?? ''} alt="pokemon" />
            </div>
          </div>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_status}>
              <span className={styles.card_bottom_span}>Stats</span>
              <div>
                {
                  pokemonStats.map((stat) => {
                    return <p
                      className={styles.card_bottom_p}
                      key={stat.stat.url}
                    >
                      {stat.stat.name}: {stat.base_stat}
                    </p>
                  })
                }
              </div>
            </div>
            <div className={styles.card_bottom_habilidades}>
              <span className={styles.card_bottom_span}>Abilities</span>
              <div>
                {
                  pokemonAbilities.map((el) => {
                    return <p
                      className={styles.card_bottom_p}
                      key={el.ability.url}
                    >
                      {el.ability.name}
                    </p>
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.list}>
          {pokemons.map((pokemon) => {
            const isActive = selectedPokemonId === pokemon.id;

            return (
              <li
                role='option'
                aria-selected={isActive}
                tabIndex={0}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    // event.preventDefault()
                    setSelectedPokemonId(pokemon.id);
                  }
                }}
                key={pokemon.name}
                className={classNames(styles.pokemon_item, {
                  [styles.pokemon_item_active]: isActive
                })}
                aria-hidden
                onClick={() => setSelectedPokemonId(pokemon.id)}
              >
                <img
                  className={styles.pokemon_item_image}
                  src={pokemon.sprites.front_default ?? ''}
                  alt='pokemon li'
                />
                <span className={styles.pokemon_item_span}>{pokemon.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PokedexPage;