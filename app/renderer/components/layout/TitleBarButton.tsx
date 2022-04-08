import React from "react";

interface TitleBarButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
}

const TitleBarButton = ({children, onClick}: TitleBarButtonProps) => {
    return (
        <button className="p-1.5 rounded-lg cursor-default bg-midnight-300 hover:bg-midnight-200" onClick={onClick}>
            {children}
        </button>
    )
}

export default TitleBarButton
