import React from "react";

interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout = ({children}: DefaultLayoutProps) => {
    return (
        <div className="p-10">
            {children}
        </div>
    )
}

export default DefaultLayout
