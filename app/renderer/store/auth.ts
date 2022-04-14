import {makeAutoObservable} from "mobx";

class Auth {

    token: string = undefined
    user: InitialUser = undefined

    constructor() {
        makeAutoObservable(this)
    }
}

const authStore = new Auth()
export default authStore
