import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { pokemonApi } from '@/rtk-api/pokemonApi';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const makeStore = () => {
    console.log('MAKE STORE')
   return  configureStore({
        reducer: {
            [pokemonApi.reducerPath]: pokemonApi.reducer,
            anyReducer: () => {
                console.log('REDUCES')
                return {a: '123'}
            }
        },
        middleware: (gDM) => gDM().concat(pokemonApi.middleware),
    });
}
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;