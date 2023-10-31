"use client";
import { GameRules } from "@/shared/rules";
import React, { createContext, useState } from "react";
export const GameContext = createContext({});
function GameProvider({ children }) {
  const [isSelect, setIsSelect] = useState(false);
  const [selection, setSelection] = useState(0);
  const [houseSelection, setHouseSelection] = useState(0);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const selectHandle = (index) => {
    setIsSelect(true);
    setSelection(index);
  };
  const playAgain = (e) => {
    e.preventDefault();
    if (e) {
      setIsSelect(false);
      setResult("");
      setShow(false);
    }
  };

  const onSelect = () => {
    const userSelect = GameRules[selection].value;
    const number = Math.floor(Math.random() * 3);
    setHouseSelection(number);
    setTimeout(() => {
      setShow(true);
      if (GameRules[houseSelection].beats.includes(userSelect)) {
        setResult("You Lose");
        setScore((score) => score - 1);
      } else {
        if (GameRules[houseSelection].value == userSelect) {
          setResult("Tie");
        } else {
          setResult("You Win");
          setScore((score) => score + 1);
        }
      }
    }, 3000);
  };

  return (
    <GameContext.Provider
      value={{
        isSelect,
        selection,
        selectHandle,
        setIsSelect,
        setResult,
        setShow,
        playAgain,
        onSelect,
        houseSelection,
        score,
        result,
        show,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
