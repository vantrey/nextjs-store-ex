
import Head from "next/head";
import { skipToken } from "@reduxjs/toolkit/query";
import { useRouter } from "next/dist/client/router";
import React from 'react';
import {getPokemonByName, getRunningQueriesThunk, useGetPokemonByNameQuery} from '@/rtk-api/pokemonApi';
import {wrapper} from '@/store/store';

export default function Pokemon() {
  const router = useRouter();

  const name = router.query.name as string;
  const result = useGetPokemonByNameQuery(name || skipToken, {skip: !name});
  const { isLoading, error, data } = result;

  return (
      <>
      <Head>
        <title>{data?.species.name ?? ""}</title>
      </Head>
      <article>
          {/*TODO: nevere write like this*/}
        {error ? (
          <>Oh no, there was an error</>
        ) : router.isFallback || isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </article>
      </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const name = context.params?.name;
        if (typeof name === "string") {
            store.dispatch(getPokemonByName.initiate(name));
        }

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {},
        };
    }
);
