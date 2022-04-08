import Image from "next/image"
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
        return "bg-green-400"
    }
}

const UserAvatar = ({ activityStatus, size = "50px" }: {activityStatus: ActivityStatus, size?: string}) => {
    return (
        <div className="relative" style={{width: size, height: size}}>
            <Image
                src={DEFAULT_PROFILE_PICTURE} width={size} height={size}
                alt="Default Profile Pictures"
                className="rounded"
            />
            <div className={`absolute -right-[4px] -bottom-[4px] w-3 h-3 rounded-full ${getActivityColor(activityStatus)}`} />
        </div>
    )
}

export default UserAvatar
