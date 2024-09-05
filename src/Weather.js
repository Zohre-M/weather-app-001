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
          <div>
            <h1>{city}</h1>
            <p>Monday 22:32, clear sky</p>
            <p>Humidity: 89%, Wind: 1km/h</p>
          </div>
        </div>
      </main>
    </div>
  );
}
