import React from "react";
import UserAvatar from "../../common/UserAvatar";

const UserSelfProfile = ({user}: {user: User}) => {
    return (
        <div className="flex gap-3 justify-center items-center px-4 h-full">
            <UserAvatar size="55px" imageSRC={user.settings.profilePicture} />
            <div className="flex flex-grow justify-between items-center">
                <div>
                    <div className="leading-none">
                        <h3 className="text-2xl text-gray-300">
                            {user.name}
                        </h3>
                        <h4 className="text-sm font-semibold text-gray-500">
                            Online: In Lobby
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSelfProfile
