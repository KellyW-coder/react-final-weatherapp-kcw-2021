import React from "react";

export default function Temperature(props) {
  function showFarenheit(event) {
    event.preventDefault();
    let temperature = (props.tempData * 9) / 5 + 32;
    alert(`The temperature in farehrenheit is ${Math.round(temperature)}°F`);
  }
  let tempData = {
    temperature: "17",
  };

  return (
    <div className="col-3">
      <span className="temp">{tempData.temperature}</span>
      <p className="units">
        <a href="/" rel="true">
          °C
        </a>{" "}
        |
        <a href="/" onClick={showFarenheit} rel="true">
          °F
        </a>
      </p>
    </div>
  );
}
