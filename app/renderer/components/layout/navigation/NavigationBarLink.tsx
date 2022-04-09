import React from "react";

interface NavigationBarLinkProps {
    title: string,
}

const NavigationBarLink = ({title}: NavigationBarLinkProps) => {
    return (
        <div className="group flex items-center h-full cursor-pointer">
            <h1 className="text-xl text-gray-400 group-hover:text-gray-200">
                {title}
            </h1>
        </div>
    )
}

export default NavigationBarLink
