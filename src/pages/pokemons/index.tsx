import React from 'react';
import {NextPage} from 'next';
import {getPokemonByName, getPokemonList, getRunningQueriesThunk, useGetPokemonListQuery} from '@/rtk-api/pokemonApi';
import {wrapper} from '@/store/store';
import Link from 'next/link';


interface IPokemonsProps {

}

const Pokemons: NextPage<IPokemonsProps> = ({}) => {
    const result = useGetPokemonListQuery();
    const { isLoading, error, data } = result;

    if (isLoading) {
        return  <>IS LOADING......</>
    }

    const nameHandler = () => {

    }

  return (
    <data>
        {data?.results.map(result =>
            <Link href={`/pokemons/${result.name}`} key={result.name}>{result.name}{' '}</Link>)}
    </data>
  );
};

export default Pokemons;

Pokemons.getInitialProps = wrapper.getInitialPageProps(store => async ({pathname, req, res}) => {
    console.log('req', req)
    console.log('pathname', pathname)
    console.log('2. Page.getInitialProps uses the store to dispatch things');
    const name = 'bulbasaur';
    store.dispatch(getPokemonList.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
});
