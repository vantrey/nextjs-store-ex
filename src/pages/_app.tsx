import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/store/store';
import {Provider} from 'react-redux';
import {useEffect} from 'react';

export default function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);

    useEffect(() => {
        if("serviceWorker" in navigator) {
                navigator.serviceWorker.register("/sw.js").then(
                    function (registration) {
                        console.log("Service Worker registration successful with scope: ", registration.scope);
                    },
                    function (err) {
                        console.log("Service Worker registration failed: ", err);
                    }
                );

        }
    }, [])

  return (
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
  )
}