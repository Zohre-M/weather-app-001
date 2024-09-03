import React from "react";

export default function Weather() {
  return (
    <div class="container">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-bar"
          />
          <input type="submit" value="Search" className="submit-button" />
        </form>
      </header>
      <main>
        <div>
          <h1 className="current-city">Paris</h1>
          <p className="current-weather-data">
            <span></span>,<span></span>
            <br />
            Humidity:
            <span className="current-weather-data-amount"></span>, Wind:
            <span className="current-weather-data-amount"></span>
          </p>
        </div>
        <div className="current-temp">
          <div>
            <div></div>
          </div>
          <div className="current-temp-amount"></div>
          <div className="current-temp-unit">°C</div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by {""}
          <a href="https://github.com/Zohre-M" target="_blank" rel="noreferrer">
            Zohreh Maghsoodi
          </a>
          , is {""}
          <a
            href="https://github.com/Zohre-M/weather-app-001.git "
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub {""}
          </a>
          and {""}
          <a
            href="https://weather-app-001-three.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Vercel
          </a>
        </p>
      </footer>
    </div>
  );
}
