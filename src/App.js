import React from "react";
import React from "react";
import Header from "./Header";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

export default function container() {
  return (
    <div className="container">
      <div className="weather-block">
        <Header />
        <Search />
        <div className="row col-auto p-2">
          <City />
          <Temperature />
          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
