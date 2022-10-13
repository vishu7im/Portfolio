import React from "react";

import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="lodder ">
      <div class="spinner  animate-charcter">
        <div class="spinner__square"></div>
        <div class="spinner__square"></div>
        <div class="spinner__square"></div>
        <div class="spinner__square"></div>
      </div>
    </div>
  );
}
