import React, {useEffect} from "react";
import TitleBarButtons from "../components/layout/TitleBarButtons";
import {useRouter} from "next/router";
import authStore from "../store/auth";
import Loader from "../components/Loader";

interface DefaultLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({children}: DefaultLayoutProps) => {
    const router = useRouter()

    useEffect(() => {
        if (authStore.user) router.push("/").catch()
    })

    if (authStore.user) {
        return <Loader />
    }

    return (
        <div className="relative h-screen">
            <div className="flex h-full">
                <div className="flex-shrink-0 w-[500px]">
                    {children}
                </div>
                <div className="flex-grow h-full bg-center bg-cover" style={{backgroundImage: "url('/images/environment.jpeg')"}} />
            </div>
            <div className="absolute top-0 left-0 w-full">
                <TitleBarButtons />
            </div>
        </div>
    )
}

export default AuthLayout
