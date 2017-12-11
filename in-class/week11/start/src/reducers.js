import { ACTION_TYPE } from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);

    switch(action.type) {
        case ACTION_TYPE:
            modifiedState.gotIt = true;
            break;
        default:
            return state;
    }

    return modifiedState;
}