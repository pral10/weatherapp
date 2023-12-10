// Inputs.jsx

import React, { useState } from "react";
import { GrLocation, GrSearch } from "react-icons/gr";
import "./Inputs.css"; // Import your CSS file for styling

const Inputs = ({ setCity, unit, setUnit }) => {
  const [cityInput, setCityInput] = useState("");

  const handleCitySearch = () => {
    if (!cityInput) return;
    setCity(cityInput);
  };

  const handleLocationClick = () => {
    console.log("I am here");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setCity(lat + "," + lon);
      });
    }
  };

  return (
    <div className="inputs-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a city..."
          className="search-input"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <GrSearch
          onClick={handleCitySearch}
          size={25}
          className="search-icon"
        />
        <GrLocation
          onClick={handleLocationClick}
          size={25}
          className="location-icon"
        />
      </div>

      <div className="unit-toggle">
        <button
          onClick={() => setUnit(unit === "c" ? "f" : "c")}
          className="unit-button"
        >
          {`°${unit === "c" ? "F" : "C"}`}
        </button>
      </div>
    </div>
  );
};

export default Inputs;
