import UserAvatar from "../../common/UserAvatar";

type ActivityStatus = "ONLINE" | "OFFLINE" | "IDLE"

const FriendsUser = ({username, activity}: {username: string, activity: { activityStatus: ActivityStatus, tagLine: string }}) => {
    return (
        <div className="flex items-center space-x-3">
            <UserAvatar activityStatus={activity.activityStatus} />
            <div className="mt-1.5 leading-3">
                <h3 className="text-gray-100">
                    {username}
                </h3>
                <h4 className="text-sm font-semibold text-gray-500">
                    {activity.tagLine}
                </h4>
            </div>
        </div>
    )
}

export default FriendsUser