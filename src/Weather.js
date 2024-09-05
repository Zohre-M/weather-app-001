import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Milan");
  function handleChange() {}
  function handleSubmit() {}
  return (
    <div className="frame">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            required
            onChange={handleChange}
            className="search-bar"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div className="current-weather-data">
            <h1>{city}</h1>
            <p>Monday 22:32, clear sky</p>
            <p>
              Humidity: <span>89%</span>, Wind: <span>1km/h</span>
            </p>
          </div>
          <div className="current-temperature">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
            <span className="current-temperature-amount">20</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </main>
    </div>
  );
}
