import React from "react";

import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="lodder ">
      <div class="spinner">
        <div class="spinner__square"></div>
        <div class="spinner__square"></div>
        <div class="spinner__square"></div>
        <div class="spinner__square"></div>
      </div>
    </div>
  );
}
