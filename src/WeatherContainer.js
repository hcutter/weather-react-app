import React from "react";
import "./WeatherContainer.css";

export default function () {
  return (
    <div className="container WeatherContainer">
      <div className="row">
        <div className="col-6 Temperture">
          <h1>
            <span id="TempNumber">32</span>
            <small>
              <a href="#" id="fahrenheit-link" class="active">
                °F
              </a>
              |
              <a href="#" id="celsius-link">
                °C
              </a>
            </small>
          </h1>
          <div className="EmojiWeather">☀️</div>
          <ul className="ConditionWeather">
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> km/h
            </li>
          </ul>
        </div>
        <div className="col-6 Temperature CurrentLocationTime">
          <h2 id="currentCity">Charleston</h2>
          <ul className="DayTime">
            <li id="day">Monday, November 7</li>
            <li id="time">7:00</li>
            <li id="description">Windy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
