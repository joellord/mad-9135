import React, {Component} from "react";
import Title from "./Title";
import WeatherForm from "./WeatherForm";
import WeatherForecast from "./WeatherForecast";

class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <WeatherForm />
                <WeatherForecast />
            </div>
        );
    }
}

export default Main;