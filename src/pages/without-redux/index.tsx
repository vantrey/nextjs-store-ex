import React, {useEffect, useState} from 'react';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import {useGetPokemonListQuery} from '@/rtk-api/pokemonApi';
import Link from 'next/link';

const WithoutRedux: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({repo}) => {
    const result = useGetPokemonListQuery();
    const { isLoading, error, data } = result;

  return (
    <>
        <data>
        <div>{repo.name}{' '}</div>
    </data>
        {!isLoading && <data>
            {data?.results.map(result =>
                <Link href={`/pokemons/${result.name}`} key={result.name}>{result.name}{' '}</Link>)}
        </data> || <>IS LOADING......</>}
    </>
  );
};

export default WithoutRedux;

type Repo = {
    name: string
    stargazers_count: number
}

export const getServerSideProps = (async (context) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo: Repo = await res.json()
    return { props: { repo } }
}) satisfies GetServerSideProps<{
    repo: Repo
}>
