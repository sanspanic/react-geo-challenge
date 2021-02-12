import React, { useState } from "react";
import Flag from "./Flag";
import "./FlagSelection.css";

const FlagSelection = ({ selection, currCountry, checkIfCorrect }) => {
  return (
    <div>
      <h2 className="FlagSelection-h2">{currCountry}</h2>
      <div className="FlagSelection">
        {selection.map((c) => (
          <Flag
            checkIfCorrect={checkIfCorrect}
            countryCode={c.countryCode}
            name={c.name}
            key={c.name}
            isCorrect={c.isCorrect}
          />
        ))}
      </div>
    </div>
  );
};

export default FlagSelection;
