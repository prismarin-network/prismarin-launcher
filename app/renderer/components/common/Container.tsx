import React from "react";

const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="mr-4 ml-8">
            {children}
        </div>
    )
}

export default Container
