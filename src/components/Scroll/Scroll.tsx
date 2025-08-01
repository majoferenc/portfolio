"use client";

import "./Scroll.scss";

export function Scroll() {
  return (
    <div id="wrapper">
      <div id="wrapper-inner">
        <div id="scroll-down">
          <span className="arrow-down" />
          <span id="scroll-title">Scroll</span>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
