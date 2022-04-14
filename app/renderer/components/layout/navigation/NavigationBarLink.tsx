import React from "react";
import Link from "next/link"

interface NavigationBarLinkProps {
    title: string,
    link: string,
}

const NavigationBarLink = ({title, link}: NavigationBarLinkProps) => {
    return (
        <Link href={link} passHref={false}>
            <div className="group flex items-center h-full cursor-pointer">
                <h1 className="text-xl text-gray-400 group-hover:text-gray-200">
                    {title}
                </h1>
            </div>
        </Link>
    )
}

export default NavigationBarLink
