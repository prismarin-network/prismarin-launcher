import {makeAutoObservable} from "mobx";

class PageStore {

    offline = false

    constructor() {
        makeAutoObservable(this)
    }

    setOfflineStatus(offline: boolean) {
        this.offline = offline
    }
}

const pageStore = new PageStore()
export default pageStore
