import { makeAutoObservable} from "mobx";

class InputCheck {

    value=''

    constructor() {
        makeAutoObservable(this)
    }



}

export default new InputCheck()