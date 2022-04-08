import React from 'react';
import type {AppProps} from 'next/app';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <React.Fragment>
            <div className="relative min-h-screen text-white cursor-default select-none bg-midnight font-outfit">
                <Component {...pageProps} />
                <div className="absolute top-0 left-0 w-full h-14 pointer-events-none titleBar"/>
            </div>
        </React.Fragment>
    )
}

export default MyApp
