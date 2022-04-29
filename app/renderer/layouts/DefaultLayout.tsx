import React from "react";
import FriendsList from "../components/panels/social/FriendsList";
import TitleBarButtons from "../components/layout/TitleBarButtons";
import {MdOutlineFileDownload, MdOutlinePersonOutline} from "react-icons/md"
import Logo from "../components/common/Logo";
import NavigationBarLink from "../components/layout/navigation/NavigationBarLink";
import UserSelfProfile from "../components/panels/social/UserSelfProfile";
import {observer} from "mobx-react-lite";
import authStore from "../store/auth";
import Link from "next/link"

interface DefaultLayoutProps {
    fullHeight?: boolean
    children: React.ReactNode
}

const DefaultLayout = observer(({fullHeight = true, children}: DefaultLayoutProps) => {
    return (
        <div className="flex relative">
            <div className="relative flex-grow mt-2">
                {fullHeight && (
                    <div className="absolute top-0 left-0 z-20 w-full bg-gradient-to-b to-transparent h-[200px] from-midnight-500"/>
                )}
                <div className="flex absolute top-0 left-0 z-20 justify-between items-center px-4 w-full h-[70px]">
                    <div id="LeftNavigation" className="flex items-center ml-3 space-x-8 h-full">
                        <div className="flex items-center">
                            <Logo height="42px" width="42px"/>
                        </div>
                        <NavigationBarLink title="Featured" link="/" />
                        <NavigationBarLink title="Games" link="/" />
                        <NavigationBarLink title="Store" link="/" />
                    </div>
                    <div id="RightNavigation" className="flex items-center space-x-4">
                        <MdOutlinePersonOutline size="1.68em" className="text-gray-500 hover:text-gray-200 cursor-pointer"/>
                        <Link href={"/downloads"} passHref={true}>
                            <MdOutlineFileDownload size="1.75rem" className="text-gray-500 hover:text-gray-200 cursor-pointer"/>
                        </Link>
                    </div>
                </div>
                <div className={`overflow-y-auto h-[98.8vh] scrollbar-hidden ${!fullHeight && 'pt-[75px]'}`}>
                    {children}
                </div>
            </div>
            <div className="flex flex-col h-screen bg-midnight-600 w-[350px] pt-[48px]">
                <div className="flex-grow">
                    <h1 className="px-4 mb-3 text-gray-400">
                        Friends (2/6)
                    </h1>
                    <div className="overflow-y-auto h-[80vh]">
                        <FriendsList />
                    </div>
                </div>
                <div className="w-full h-24 bg-midnight-400">
                    <UserSelfProfile username={authStore.user.name} />
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full">
                <TitleBarButtons/>
            </div>
        </div>
    )
})

export default DefaultLayout
