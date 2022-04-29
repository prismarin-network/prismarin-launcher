import {makeAutoObservable, runInAction} from "mobx";
import {authenticateUserWithLoginDetails, authenticateUserWithToken} from "../core/auth";
import Store from "electron-store";
import {enrichInitialUserWithData} from "../core/user";

const store = new Store({name: 'auth'});

class Auth {

    token: string = undefined
    user: User = undefined

    constructor() {
        makeAutoObservable(this)
    }

    async authenticateWithLoginDetails(username: string, password: string) {
        // Attempt to authenticate the user
        const loginDetails = await authenticateUserWithLoginDetails(username, password)

        // Save newly generated token to local storage
        store.set('auth.token', loginDetails.token)

        // Enrich initialUser with user data
        const enrichedUser = enrichInitialUserWithData(loginDetails.user)

        // Update stored user object
        runInAction(() => {
            this.token = loginDetails.token
            this.user = enrichedUser
        })
    }

    async authenticateWithSavedToken() {
        // Check if a token is saved in the local storage
        const token = store.get('auth.token')
        if (!token) return;

        // Attempt to authenticate the user with the token
        const loginDetails = await authenticateUserWithToken(token)

        // Enrich initialUser with user data
        const enrichedUser = enrichInitialUserWithData(loginDetails.user)

        // Update stored user object
        runInAction(() => {
            this.token = loginDetails.token
            this.user = enrichedUser
        })
    }

    async logout() {
        // Clear token from local storage
        store.delete('auth.token')

        runInAction(() => {
            authStore.token = undefined
            authStore.user = undefined
        })
    }
}

const authStore = new Auth()
export default authStore
