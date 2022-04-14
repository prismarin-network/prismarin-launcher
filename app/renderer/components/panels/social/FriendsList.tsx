import FriendsUser from "./FriendsUser";

const FriendsList = () => {
    return (
        <div className="flex flex-col">
            <FriendsUser username="ReaperMaga" activity={{activityStatus: "ONLINE", tagLine: "Playing: FrostBite"}} />
            <FriendsUser username="HOPE" activity={{activityStatus: "ONLINE", tagLine: "Playing: FreeLife"}} />
            <FriendsUser username="Savje" activity={{activityStatus: "ONLINE", tagLine: "Playing: Inverted Souls"}} />
            <FriendsUser username="leVenour" activity={{activityStatus: "IDLE", tagLine: "Idle"}} />
            <FriendsUser username="Nyx" activity={{activityStatus: "OFFLINE", tagLine: "Last seen 5d ago"}} />
            <FriendsUser username="NotChriz" activity={{activityStatus: "OFFLINE", tagLine: "Last seen 8d ago"}} />
            <FriendsUser username="RicoPing" activity={{activityStatus: "OFFLINE", tagLine: "Last seen 2y ago"}} />
        </div>
    )
}

export default FriendsList
