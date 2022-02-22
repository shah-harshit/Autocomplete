import React from "react";
import "../App.css";

export const AutoComplete = ({
  filteredValues,
  selectedValueIndex,
  handleValueClick,
}) => {
  return (
    <div className="autocomplete-container">
      {filteredValues.length ? (
        filteredValues.map((value, index) => (
          <div
            key={index}
            className={`autocomplete-value ${
              selectedValueIndex === index ? "selected-value" : ""
            }`}
            onClick={handleValueClick}
          >
            {value}
          </div>
        ))
      ) : (
        <div className="autocomplete-value no-options">No Options</div>
      )}
    </div>
  );
};
