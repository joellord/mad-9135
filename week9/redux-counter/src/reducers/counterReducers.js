export default (state = [], action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case "INCREASE_COUNTER":
            newState.count++;
            break;
        case "DECREASE_COUNTER":
            newState.count--;
            break;
        default:
            break;
    }

    return newState;
}