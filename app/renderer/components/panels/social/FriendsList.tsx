import FriendsUser from "./FriendsUser";

const FriendsList = ({user}: {user: User}) => {
    return (
        <div className="flex flex-col">
            {user.social.friends.map((friend, index) => (
                <FriendsUser key={index} username={friend} activity={{activityStatus: "OFFLINE", tagLine: "Unknown Status"}} />
            ))}
            {user.social.friends.length === 0 && (
                <div className="px-4 text-center text-gray-400 pt-[100px]">
                    You do not have any friends yet.
                    <button className="mt-2 btn btn-sm btn-primary btn-outline">
                        Add your first friend
                    </button>
                </div>
            )}
        </div>
    )
}

export default FriendsList
