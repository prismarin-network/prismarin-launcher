import FriendsUser from "./FriendsUser";

const FriendsList = () => {
    return (
        <div className="flex flex-col gap-4">
            <FriendsUser username="ReaperMaga" activity={{activityStatus: "ONLINE", tagLine: "Playing: FrostBite"}} />
            <FriendsUser username="Savje" activity={{activityStatus: "ONLINE", tagLine: "Playing: Inverted Souls"}} />
            <FriendsUser username="leVenour" activity={{activityStatus: "IDLE", tagLine: "Idle"}} />
            <FriendsUser username="Nyx" activity={{activityStatus: "OFFLINE", tagLine: "Last seen 5d ago"}} />
        </div>
    )
}

export default FriendsList
