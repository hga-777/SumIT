import React from "react";
import "../../Display.css";
const Display = ({ summary }) => {
  return (
    <div className="summary-display">
      <h2 className="summary-title">Article Summary</h2>
      <div className="summary-content">{summary}</div>
    </div>
  );
};

export default Display;
