import initialStore from "../redux-store/initialStore";
import {LOGIN, LOGOUT} from "../redux-store/ActionConst";

const authReducer = (auth = initialStore.auth, action) => {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGOUT:
            return false;
        default:
            return auth;
    }
}

export default authReducer