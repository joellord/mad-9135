import {INCREASE_COUNTER, DECREASE_COUNTER} from "./actions";

export default function counterApp(state, action) {
    let modifiedState = Object.assign({}, state);

    switch(action.type) {
    case INCREASE_COUNTER:
        modifiedState.count++;
        break;
    case DECREASE_COUNTER:
        modifiedState.count--;
        break;
    default:
        return state;
    }

    return modifiedState;
}