import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div className="card-body">
        <form id="city-search">
          <div className="input-group mb-3 mt-3">
            <input
              className="form-control shadow-sm"
              type="text"
              placeholder="Search city here"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
            />
            <button
              className="btn btn-outline-info"
              type="submit"
              value="Search"
            >
              Go {">"}
            </button>
            <button type="button" className="btn btn-dark" id="current-loc">
              Current location
            </button>
          </div>
        </form>
        <hr />
      </div>
    </div>
  );
}
