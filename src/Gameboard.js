import React, {useState} from "react";
import FlagSelection from './FlagSelection';
import countryCodes from "./countryCodes";

const Gameboard = () => {

    const [selection, setSelection] = useState([])
    const [currCountry, setCurrCountry] = useState("")
    const [score, setScore] = useState(0)

    const pickRandomCountry = () => {
        let randNum = Math.floor(Math.random() * countryCodes.length)
        return countryCodes[randNum]
    }

    const handleStart = () => {
        const countries = []; 
        for(let i=0; i < 4; i++) {
            countries.push(pickRandomCountry())
        }
        const finalCountries = countries.map(c => {return {"countryCode": c.Code, "name": c.Name, "isCorrect": false}})
        //set a random country from finalCountries to be true
        const randIdx = Math.floor(Math.random() * finalCountries.length)
        finalCountries[randIdx].isCorrect = true
        setCurrCountry(finalCountries[randIdx].name)
        setSelection(finalCountries)
    }

    const checkIfCorrect = (isCorrect) => {
        if (isCorrect) {
            console.log("CORRECT")
            setScore(score+1)
            handleStart()
        }
    }

  return (
  <div>
      <h1>Guess the Flag</h1>
      {selection.length === 0 ? <button onClick={handleStart}>Start</button> : null}
      <div>
          <FlagSelection checkIfCorrect={checkIfCorrect} currCountry={currCountry} selection={selection}/>
      </div>
      <div>
          Current score: {score}
      </div>
  </div>
  )
};

export default Gameboard;
