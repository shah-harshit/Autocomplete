import React from "react";
import "./App.css";
import { AutoComplete } from "./component/auto-complete";
import { countries } from "./constants";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredValues, setFilteredValues] = React.useState([]);
  const [selectedValueIndex, setSelectedValueIndex] = React.useState(0);
  const [showFilteredValues, setShowFilteredValues] = React.useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const newFilteredValue = countries.filter(
      (value) => value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    setSearchValue(inputValue);
    setFilteredValues(newFilteredValue);
    setSelectedValueIndex(0);
    setShowFilteredValues(true);
  };

  const onKeyDown = (e) => {
    // Up key is pressed
    if (e.keyCode === 38 && selectedValueIndex !== 0) {
      setSelectedValueIndex((index) => index - 1);
    }
    // Down key is pressed
    if (e.keyCode === 40) {
      setSelectedValueIndex((index) => index + 1);
    }
    // Enter key is pressed
    if (e.keyCode === 13 && filteredValues.length) {
      setSearchValue(filteredValues[selectedValueIndex]);
      setFilteredValues([]);
      setSelectedValueIndex(0);
      setShowFilteredValues(false);
    }
  };

  const handleValueClick = (e) => {
    setSearchValue(e.target.innerText);
    setFilteredValues([]);
    setSelectedValueIndex(0);
    setShowFilteredValues(false);
  };

  return (
    <div className="app-container">
      <input
        type="text"
        className="text-input"
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        value={searchValue}
        placeholder="Type a country..."
      />
      {showFilteredValues && searchValue && (
        <AutoComplete
          filteredValues={filteredValues}
          selectedValueIndex={selectedValueIndex}
          handleValueClick={handleValueClick}
        />
      )}
    </div>
  );
};

export default App;
