import React from "react";
import UserAvatar from "../../common/UserAvatar";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

type ActivityStatus = "ONLINE" | "OFFLINE" | "IDLE"

interface FriendsUserProps {
    username: string,
    activity: { activityStatus: ActivityStatus, tagLine: string }
}

const FriendsUser = ({username, activity }: FriendsUserProps) => {
    return (
        <React.Fragment>
            <ContextMenuTrigger id={`contextMenu-${username}`}>
                <div className="group relative">
                    <div className="flex items-center py-2 px-4 space-x-3 group-hover:bg-midnight-400/50 cursor-pointer">
                        <UserAvatar activityStatus={activity.activityStatus} size="48px"/>
                        <div className="leading-none">
                            <h3 className="text-lg text-gray-300">
                                {username}
                            </h3>
                            <h4 className="text-sm font-semibold text-gray-500">
                                {activity.tagLine}
                            </h4>
                        </div>
                    </div>
                </div>
            </ContextMenuTrigger>
            <ContextMenu id={`contextMenu-${username}`}>
                <MenuItem disabled={true}>
                    View profile
                </MenuItem>
                <MenuItem disabled={true}>
                    Invite to lobby
                </MenuItem>
                <MenuItem disabled={true}>
                    Send message
                </MenuItem>
                <MenuItem divider={true} />
                <MenuItem>
                    Remove friend
                </MenuItem>
            </ContextMenu>
        </React.Fragment>
    )
}

export default FriendsUser
