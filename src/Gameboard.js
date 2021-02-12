import React, { useState, useEffect, useRef } from "react";
import FlagSelection from "./FlagSelection";
import countryCodes from "./countryCodes";
import Timebar from "./Timebar.js";
import "./Gameboard.css";

const Gameboard = () => {
  const [selection, setSelection] = useState([]);
  const [currCountry, setCurrCountry] = useState("");
  const [score, setScore] = useState(0);
  const [height, setHeight] = useState(0);
  const timerId = useRef();
  const [gameStarted, setGameStarted] = useState(false);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }

    timerId.current = setInterval(() => {
      setHeight((h) => h - 1);
    }, 20);

    return () => clearInterval(timerId.current);
  }, [selection]);

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  //🧐 this stops the timer from continuing after first load,
  // and sets game to over when timer reaches 0. wrapper in !isOver to prevent infinite re-render error 🧐
  useEffect(() => {
    if (!isOver) {
      if (height <= 0) {
        stopTimer();
        console.log("TIMER was stopped");
        if (gameStarted) {
          console.log("GAME IS OVER");
          setIsOver(true);
        }
      }
    }
  }, [height, isOver]);

  const pickRandomCountry = () => {
    let randNum = Math.floor(Math.random() * countryCodes.length);
    return countryCodes[randNum];
  };

  const makeSelection = () => {
    const countries = [];
    for (let i = 0; i < 4; i++) {
      countries.push(pickRandomCountry());
    }
    const finalCountries = countries.map((c) => {
      return { countryCode: c.Code, name: c.Name, isCorrect: false };
    });
    //set a random country from finalCountries to be true
    const randIdx = Math.floor(Math.random() * finalCountries.length);
    finalCountries[randIdx].isCorrect = true;
    return {
      currCountry: finalCountries[randIdx].name,
      selection: finalCountries,
    };
  };

  const startGame = () => {
    setGameStarted(true);
    const { currCountry, selection } = makeSelection();
    setCurrCountry(currCountry);
    setSelection(selection);
    setHeight(200);
  };

  const prepareNextTurn = () => {
    const { currCountry, selection } = makeSelection();
    setCurrCountry(currCountry);
    setSelection(selection);
    setHeight(200);
  };

  const checkIfCorrect = (isCorrect) => {
    if (isCorrect) {
      console.log("CORRECT");
      setScore((score) => score + 1);
      prepareNextTurn();
    }
  };

  return (
    <div className="Gameboard">
      {selection.length === 0 ? (
        <button className="Gameboard-start-btn" onClick={startGame}>
          Start
        </button>
      ) : null}
      <div className="Gameboard-wrapper">
        {isOver ? null : (
          <FlagSelection
            checkIfCorrect={checkIfCorrect}
            currCountry={currCountry}
            selection={selection}
          />
        )}
        {isOver || selection.length === 0 ? null : <Timebar height={height} />}
      </div>
      <div className="Gameboard-spacer"></div>
      <div className="Gameboard-score">
        {isOver
          ? `GAME OVER! Final score: ${score}`
          : `Current score: ${score}`}
      </div>
    </div>
  );
};

export default Gameboard;
