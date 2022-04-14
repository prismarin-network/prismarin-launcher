// This is for global types we need in the project
// You can create types and access them in the entire project

interface InitialUser {
    id: string,
    role: string,
    email: string,
    name: string,
}

interface User extends InitialUser {
    games: Game[],
    social: {
        friends: string[], // List of id of the friends
        friendRequests: {
            sent: string[], // List of id of the friends
            received: string[], // List of id of the friends
        }
        gameInvites: {
            sent: string[],
            received: string[],
        }
    }
    settings: {
        profilePicture: string,
    }
}

interface Game {
    id: string,
    name: string,
    version: string,
    media: {
        logo: string,
        background: string,
        poster: string,
    }
}
