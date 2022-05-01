import React, {useEffect} from "react";
import TitleBarButtons from "../components/layout/TitleBarButtons";
import {useRouter} from "next/router";
import authStore from "../store/auth";
import Loader from "../components/Loader";
import pageStore from "../store/page";

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
                <div className="flex-grow py-16 px-10 h-full bg-center bg-cover" style={{backgroundImage: "url('/images/environment.jpeg')"}}>
                    {pageStore.offline && (
                        <div className="shadow alert alert-error">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current"
                                     fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Error! We are having issue connecting to the prismarin servers.</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full">
                <TitleBarButtons />
            </div>
        </div>
    )
}

export default AuthLayout
