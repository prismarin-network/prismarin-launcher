import React from "react";
import UserAvatar from "../../common/UserAvatar";
import {MdOutlineLogout} from "react-icons/md"
import authStore from "../../../store/auth";

interface UserSelfProfile {
    username: string
}

const UserSelfProfile = ({username}: UserSelfProfile) => {
    return (
        <div className="flex gap-3 justify-center items-center px-4 h-full">
            <UserAvatar size="55px" />
            <div className="flex flex-grow justify-between items-center">
                <div>
                    <div className="leading-none">
                        <h3 className="text-2xl text-gray-300">
                            {username}
                        </h3>
                        <h4 className="text-sm font-semibold text-gray-500">
                            Online: In Lobby
                        </h4>
                    </div>
                </div>
                <button className="btn btn-square" onClick={authStore.logout}>
                    <MdOutlineLogout size="1.5rem" />
                </button>
            </div>
        </div>
    )
}

export default UserSelfProfile
