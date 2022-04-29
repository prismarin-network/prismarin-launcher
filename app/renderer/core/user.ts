export function enrichInitialUserWithData (initialUser: InitialUser): User {
    return {
        ...initialUser,
        games: [],
        social: {
            friends: [
                "Test User"
            ],
            friendRequests: {
                received: [],
                sent: [],
            },
            gameInvites: {
                sent: [],
                received: [],
            },
        },
        settings: {
            profilePicture: "https://avatars.githubusercontent.com/u/30908158?v=4",
        }
    }
}
