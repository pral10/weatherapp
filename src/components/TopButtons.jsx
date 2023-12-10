import React from "react";
import "./TopButtons.css"; 

const TopButtons = ({ setCity }) => {
  const cities = [
    {
      id: 1,
      title: "Boston",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Kathmandu",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => setCity(city.title)}
          key={city.id}
          className="fancy-button"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
