import React from "react";
import "./Flag.css"

const Flag = ({ countryCode, name, isCorrect, checkIfCorrect }) => {
    return (
        <img className="Flag" onClick={() => checkIfCorrect(isCorrect)} key={name} src={`https://flagcdn.com/192x144/${countryCode.toLowerCase()}.png`}/>
    )
}



export default Flag;
