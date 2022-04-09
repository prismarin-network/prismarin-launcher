import UserAvatar from "../../common/UserAvatar";

type ActivityStatus = "ONLINE" | "OFFLINE" | "IDLE"

const FriendsUser = ({username, activity}: {username: string, activity: { activityStatus: ActivityStatus, tagLine: string }}) => {
    return (
        <div className="group relative">
            <div className="flex items-center py-2 px-4 space-x-3 group-hover:bg-black cursor-pointer">
                <UserAvatar activityStatus={activity.activityStatus} size="45px" />
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
    )
}

export default FriendsUser
