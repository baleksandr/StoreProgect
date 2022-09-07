import initialStore from "./initialStore";
import {ADDTOBASKET, REMOVEFROMBASKET} from "./ActionConst";

const basketReducer = (basket = initialStore.basket, action) => {
    switch (action.type) {
        case ADDTOBASKET:
            return  [...basket,action.payload]
        case REMOVEFROMBASKET:
            return [ ...basket.filter(game => game.id !== action.payload)];
        default:
            return basket;
    }
}

export default basketReducer
// basket.push(action.payload);
//basket.filter(game => game.id !== action.payload.id)