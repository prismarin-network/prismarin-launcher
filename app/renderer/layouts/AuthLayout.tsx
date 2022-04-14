import React from "react";
import TitleBarButtons from "../components/layout/TitleBarButtons";

interface DefaultLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({children}: DefaultLayoutProps) => {
    return (
        <div className="flex h-screen">
            <div className="w-[500px]">
                {children}
            </div>
            <div className="flex-grow h-full bg-center bg-cover" style={{backgroundImage: "url('/images/environment.jpeg')"}}>
                <TitleBarButtons />
            </div>
        </div>
    )
}

export default AuthLayout
