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
            className={
              selectedValueIndex === index
                ? "selected-value"
                : "autocomplete-value"
            }
            onClick={handleValueClick}
          >
            {value}
          </div>
        ))
      ) : (
        <div className="autocomplete-value">No Data Found</div>
      )}
    </div>
  );
};
