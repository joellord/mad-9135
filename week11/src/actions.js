import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const CHANGE_CITY = "CHANGE_CITY";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAIL = "FETCH_WEATHER_FAIL";

export function isFetching(state) {
    return {
        type: FETCH_WEATHER,
        state: state
    };
}

export function weatherFetchSuccess(data) {
    return {
        type: FETCH_WEATHER_SUCCESS,
        data: data
    };
}

export function weatherFetchFailure(error) {
    return {
        type: FETCH_WEATHER_FAIL,
        error: error
    };
}

export function changeCity(text) {
    return {
        type: CHANGE_CITY,
        city: text
    };
}

export function fetchWeather(city) {
    return (dispatch) => {
        dispatch(isFetching(true));

        let key = "c95951b6fec7e1a5b79aad4db8eaca2d";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;
        axios.get(url)
            .then((response) => {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }

                dispatch(isFetching(false));

                return response;
            })
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                return dispatch(weatherFetchSuccess(data));
            })
            .catch((e) => dispatch(weatherFetchFailure(e)));
    };
}