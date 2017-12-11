import { ACTION_TYPE, FETCH_DATA_SUCCESS } from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);

    switch(action.type) {
        case ACTION_TYPE:
            modifiedState.gotIt = true;
            break;
        case FETCH_DATA_SUCCESS:
            modifiedState.data = action.data.results[0].formatted_address;
            break;
        default:
            return state;
    }

    return modifiedState;
}