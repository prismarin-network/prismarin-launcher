import {FaUserAlt} from "react-icons/fa"

type ActivityStatus = "ONLINE" | "OFFLINE" | "IDLE"

const getActivityColor = (activityStatus: ActivityStatus) => {
    if (activityStatus === "OFFLINE") {
        return "bg-gray-400"
    }
    if (activityStatus === "IDLE") {
        return "bg-yellow-400"
    }
    if (activityStatus === "ONLINE") {
        return "bg-green-400"
    }
}

const UserAvatar = ({ activityStatus, size = "1rem" }: {activityStatus: ActivityStatus, size?: string}) => {
    return (
        <div className="flex relative justify-center items-center p-3.5 w-min bg-gray-600 rounded-lg">
            <FaUserAlt className="-mt-0.5 text-white" size={size} />
            <div className={`absolute -right-[4px] -bottom-[4px] w-4 h-4 rounded-full ${getActivityColor(activityStatus)}`} />
        </div>
    )
}

export default UserAvatar
