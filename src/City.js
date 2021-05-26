import React from "react";

export default function City() {
  let cityData = {
    city: "Portland",
    date: "Friday | 19:17",
    humidity: "10",
    wind: "7",
  };

  return (
    <div className="col-6">
      <h2>{cityData.city}</h2>
      <ul>
        <li>{cityData.date}</li>
        <li>Humidity: {cityData.humidity} %</li>
        <li>Wind: {cityData.wind} km/h</li>
      </ul>
    </div>
  );
}
