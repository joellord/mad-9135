import { ACTION_TYPE } from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);

    switch(action.type) {
    case ACTION_TYPE:
        break;
    default:
        return state;
    }

    return modifiedState;
}