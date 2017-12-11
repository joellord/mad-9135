import React, {Component} from "react";
import { connect } from "react-redux";

class WeatherForecast extends Component {
    render() {
        if (this.props.isFetching) {
            return (
                <div>
                    Loading...
                </div>
            );
        } else if(!this.props.dataFetched) {
            return (
                <div>Please enter a city</div>
            );
        } else if(this.props.errorData) {
            return (
                <div>
                    <div>An error occurred:</div>
                    <p>{this.props.errorData}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Current weather condition for {this.props.city}</h2>
                    <p>Current temperature: {this.props.temp} C</p>
                    <p>Current humidity: {this.props.humidity} %</p>
                    <p>Current weather condition: {this.props.weather}</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataFetched: state.weatherApi.dataFetched,
        isFetching: state.weatherApi.isFetching,
        city: state.weatherData.city,
        humidity: state.weatherData.humidity || 0,
        temp: state.weatherData.temp || 0,
        weather: state.weatherData.weather || "",
        errorData: state.weatherApi.errorData
    };
};

export default connect(mapStateToProps)(WeatherForecast);