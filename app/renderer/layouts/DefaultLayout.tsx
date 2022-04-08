import React from "react";
import FriendsList from "../components/panels/friends/FriendsList";
import TitleBarButtons from "../components/layout/TitleBarButtons";
import {MdOutlineFileDownload, MdOutlinePersonOutline} from "react-icons/md"
import Logo from "../components/common/Logo";

interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout = ({children}: DefaultLayoutProps) => {
    return (
        <div className="flex">
            <div className="flex-grow">
                <div className="flex justify-between items-center p-4 w-full bg-midnight">
                    <div id="LeftNavigation" className="flex gap-8 items-center ml-3">
                        <div className="flex items-center">
                            <Logo height="30px" width="30px" />
                            <h1 className="ml-1.5 text-2xl text-gray-200 hover:text-gray-200">
                                Prismarin
                            </h1>
                        </div>
                        <h1 className="text-xl text-gray-400 hover:text-gray-200 cursor-pointer">
                            Games
                        </h1>
                        <h1 className="text-xl text-gray-400 hover:text-gray-200 cursor-pointer">
                            Store
                        </h1>
                    </div>
                    <div id="RightNavigation" className="flex gap-4 items-center">
                        <MdOutlinePersonOutline size="1.68em" className="text-gray-500 hover:text-gray-200 cursor-pointer" />
                        <MdOutlineFileDownload size="1.75rem" className="text-gray-500 hover:text-gray-200 cursor-pointer" />
                    </div>
                </div>
                {children}
            </div>
            <div className="flex flex-col h-screen bg-midnight-600 w-[300px]">
                <TitleBarButtons/>
                <div className="flex-grow">
                    <h1 className="px-4 mb-3 text-gray-400">
                        Friends (2/6)
                    </h1>
                    <FriendsList/>
                </div>
                <div className="w-full h-24 bg-midnight-400"/>
            </div>
        </div>
    )
}

export default DefaultLayout
