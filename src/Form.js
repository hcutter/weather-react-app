import React from "react";
import "./Form.css";

export default function () {
  return (
    <form className="search-bar" id="search-bar">
      <i className="fa-solid fa-magnifying-glass magnifying-glass"></i>
      <input type="search" placeholder="Search city here" id="inputCity" />
      <button type="submit" id="searchCity">
        Search
      </button>
      <button type="submit" id="currentLocationButton">
        Current
      </button>
    </form>
  );
}
