import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchWeather, changeCity } from "../actions";

class WeatherForm extends Component {
    render() {
        return (
            <div>
                <label htmlFor="city">City: </label>
                <input type="text" value={this.props.city} onChange={this.props.onCityChanged} name="city" />
                <button type="button" onClick={this.props.getWeatherData} city={this.props.city}>Get Weather Data</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        city: state.weatherForm.city
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherData: (e) => dispatch(fetchWeather(e.target.getAttribute("city"))),
        onCityChanged: (e) => dispatch(changeCity(e.target.value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);