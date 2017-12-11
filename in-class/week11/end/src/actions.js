import axios from "axios";

export const ACTION_TYPE = "ACTION_TYPE";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export function actionCreator() {
    return {
        type: ACTION_TYPE
    };
}

export function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data
    };
}

export function delayedAction() {
    return (dispatch) => {
        setTimeout(() => dispatch(actionCreator()), 2000);
    };
}

export function fetchData() {
    return (dispatch) => {
        let place = "Algonquin%20College";
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + place)
            .then((response) => {
                /* eslint no-debugger: 0 */
                return response.data;
            }).then((data) => {
                dispatch(fetchDataSuccess(data));
            });
    };
}