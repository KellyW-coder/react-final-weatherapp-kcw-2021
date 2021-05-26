import React from "react";
import bootstrap from "bootstrap";

export default function Weather() {
  let weatherData = {
    description: "Overcast",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };

  return (
    <div className="col-3">
      <figure className="figure">
        <img
          src={weatherData.imgUrl}
          className="figure-img img-fluid rounded"
          alt={weatherData.description}
          width="80px"
        />
        <figcaption className="figure-caption">
          {weatherData.description}
        </figcaption>
      </figure>
    </div>
  );
}
