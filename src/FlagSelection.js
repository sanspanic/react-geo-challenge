import React, { useState } from "react";
import Flag from "./Flag";

const FlagSelection = ({selection, currCountry, checkIfCorrect }) => {

  return (
    <>
        <h2>{currCountry}</h2>
      <div>
        {selection.map(c => <Flag checkIfCorrect={checkIfCorrect} countryCode={c.countryCode} name={c.name} key={c.name} isCorrect={c.isCorrect} />)}
    </div>
    </>
  );
};

export default FlagSelection;
