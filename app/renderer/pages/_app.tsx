import React, {useEffect, useState} from 'react';
import type {AppProps} from 'next/app';

import '../styles/globals.css';
import '@splidejs/react-splide/css';

import ToastWrapper from "../components/ToastWrapper";
import authStore from "../store/auth";
import Loader from "../components/Loader";
import DownloadListeners from "../listeners/DownloadListeners";

function MyApp({Component, pageProps}: AppProps) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        authStore.authenticateWithSavedToken()
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <React.Fragment>
            <div className="relative min-h-screen text-white cursor-default select-none bg-midnight font-outfit">
                <Component {...pageProps} />
            </div>
            <ToastWrapper />
            <DownloadListeners />
        </React.Fragment>
    )
}

export default MyApp
