import UserAvatar from "../../common/UserAvatar";

type ActivityStatus = "ONLINE" | "OFFLINE" | "IDLE"

const FriendsUser = ({username, activity}: {username: string, activity: { activityStatus: ActivityStatus, tagLine: string }}) => {
    return (
        <div className="group relative">
            <div className="flex items-center py-2 px-4 space-x-3 cursor-pointer group-hover:bg-midnight-400">
                <UserAvatar activityStatus={activity.activityStatus} size="35px" />
                <div className="mt-1.5 leading-4">
                    <h3 className="text-gray-300">
                        {username}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-500">
                        {activity.tagLine}
                    </h4>
                </div>
            </div>
            <div className="hidden group-hover:block absolute top-0 shadow-lg -left-[350px] w-[350px] pr-[10px]">
                <div className="py-3 px-4 rounded-lg bg-midnight-800">
                    <div className="flex items-center pb-3 mb-3 space-x-3 border-b-2 border-gray-500">
                        <UserAvatar size="55px" />
                        <div className="leading-4">
                            <h3 className="text-xl text-gray-300">
                                {username}
                            </h3>
                            <h4 className="font-semibold text-gray-500">
                                {activity.tagLine}
                            </h4>
                        </div>
                    </div>
                    <div className="text-gray-400">
                        More info about the user here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsUser
