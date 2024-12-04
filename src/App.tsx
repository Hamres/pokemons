import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { PokedexPage, PokemonsPage } from './pages';
import { ROUTES } from './utils/constants';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import { Layout } from './common/layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path={ROUTES.POKEMONS} element={<PokemonsPage/>}/>
        <Route path={ROUTES.POKEDEX} element={<PokedexPage/>}/>
        <Route path={ROUTES.POKEMON} element={<PokemonPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
