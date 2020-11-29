import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Edmonton",
    date: "Friday 21:00",
    temperature: 2,
    description: "Clear",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    humidity: 82,
    wind: 1,
  };
  return (
    <div className="container">
      <div className="current">
        <form id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city..."
                autofocus="on"
                autocomplete="off"
                className="form-control shadow-sm"
              />
            </div>
            <div className="col">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
            <div className="col">
              <button
                className="btn btn-primary shadow-sm"
                input
                type="submit"
                value="search"
                id="home"
              >
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </div>
        </form>
        <br />
        <div className="row">
          <div className="col">
            <h1> {weatherData.city} </h1>
            <h2> {weatherData.date} </h2>
          </div>
          <div className="col">
            <div className="currentWeather">
              <img
                src={weatherData.image}
                width="175px"
                height="175px"
                alt={weatherData.description}
                id="weatherIcon"
              />
            </div>
          </div>
        </div>
        <h3>Currently</h3>
        <span className="weatherDescription"> {weatherData.description} </span>
      </div>
      <div className="row">
        <div className="col">
          <span className="currentTemperature">
            {" "}
            {weatherData.temperature}{" "}
          </span>
          <span className="units">
            <span>℃</span>|<span>℉</span>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i className="fas fa-tint"></i> Humidity: {weatherData.humidity}{" "}
              <span></span>%
            </li>
            <li>
              <i className="fas fa-wind"></i> Wind: {weatherData.wind}{" "}
              <span></span>km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row" id="forecastTemperature" alt="clear"></div>
    </div>
  );
}
