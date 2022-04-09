import DEFAULT_PROFILE_PICTURE from "../../public/images/default_avatar.png"

type ActivityStatus = "ONLINE" | "OFFLINE" | "IDLE"

const getActivityColor = (activityStatus: ActivityStatus) => {
    if (activityStatus === "OFFLINE") {
        return "bg-gray-400"
    }
    if (activityStatus === "IDLE") {
        return "bg-yellow-400"
    }
    if (activityStatus === "ONLINE") {
        return "bg-green-500"
    }
}

const UserAvatar = ({activityStatus, size}: { activityStatus?: ActivityStatus, size?: string }) => {
    return (
        <div className="relative">
            <div className="flex overflow-hidden justify-center items-center">
                <img src={DEFAULT_PROFILE_PICTURE.src} width={size} height={size}
                     alt="Profile Picture"
                     className="mask mask-squircle"
                />
            </div>
            {activityStatus && (
                <div className={`absolute -right-0.5 -bottom-0.5 w-5 h-5 rounded-full border-4 border-midnight ${getActivityColor(activityStatus)}`} />
            )}
        </div>
    )
}

export default UserAvatar
