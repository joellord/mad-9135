import { INCREASE_COUNTER, DECREASE_COUNTER } from "./actions";

export function mainApp(state, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case INCREASE_COUNTER:
            newState.count++;
            break;
        case DECREASE_COUNTER:
            newState.count--;
            break;
        default:
            return state;
    }
    return newState;
}