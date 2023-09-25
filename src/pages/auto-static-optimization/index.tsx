import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {getPokemonByName, getPokemonList, getRunningQueriesThunk, useGetPokemonListQuery} from '@/rtk-api/pokemonApi';
import {wrapper} from '@/store/store';

const AutoStatic: NextPage = ({}) => {
const [data, setData] = useState({name: 'DEFAULT'})

    useEffect(() => {
        setData({name: "DATA"})
    }, [])

  return (
    <data>
        <div>{data.name}{' '}</div>
    </data>
  );
};

export default AutoStatic;
