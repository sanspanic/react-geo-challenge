import React from "react";

const Flag = ({ countryCode, name, isCorrect, checkIfCorrect }) => {


    return (
        <img onClick={() => checkIfCorrect(isCorrect)} key={name} src={`https://www.countryflags.io/${countryCode}/shiny/64.png`}/>
    )
}

export default Flag;
