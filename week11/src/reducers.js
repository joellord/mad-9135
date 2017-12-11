import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL, CHANGE_CITY } from "./actions";

export default function reducers(state, action) {
    let changes = {};

    switch(action.type) {
        case CHANGE_CITY:
            changes.weatherForm = {city: action.city};
            break;
        case FETCH_WEATHER:
            changes.weatherApi = {isFetching: action.state, dataFetched: true};
            break;
        case FETCH_WEATHER_SUCCESS:
            changes.weatherData = {
                city: state.weatherForm.city,
                humidity: action.data.main.humidity,
                temp: action.data.main.temp,
                weather: action.data.weather[0].description
            };
            break;
        case FETCH_WEATHER_FAIL:
            changes.weatherApi = {errorData: action.error.message, isFetching: false, dataFetched: true};
            break;
        default:
            return state;
    }

    return Object.assign({}, state, changes);
}