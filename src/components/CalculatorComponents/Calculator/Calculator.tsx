import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Calculator.module.css";
import CalculatorTile from "../CalculatorTile/CalculatorTile";
import CalculatorCirclesRow from "../CalculatorCirclesRow/CalculatorCirclesRow";
import { Action } from "./types";
import { computeCalculatorAction } from "./utils";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";

const Calculator: React.FC = () => {
  const [prevNumber, setPrevNumber] = useState<string>("");
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [action, setAction] = useState<Action | undefined>(undefined);
  const [isCalculatorTouched, setIsCalculatorTouched] =
    useState<boolean>(false);

  const handleNumber = (pressedNumber: string) => {
    setIsCalculatorTouched(true);
    if (pressedNumber === "." && currentNumber.includes(".")) return;
    const newCurrentNumber =
      currentNumber === "0" && !isCalculatorTouched
        ? pressedNumber
        : currentNumber + pressedNumber;
    setCurrentNumber(newCurrentNumber);
  };

  const handleAction = (action: Action) => {
    if (currentNumber === "") return;
    if (prevNumber !== "") {
      computeNumber();
    }
    setAction(action);
    setPrevNumber(currentNumber);
    setCurrentNumber("");
  };

  const handlePlusMinus = () => {
    if (Math.sign(parseFloat(currentNumber)) === 1) {
      setCurrentNumber("-" + currentNumber);
    } else {
      setCurrentNumber(String(Math.abs(parseFloat(currentNumber))));
    }
  };

  const handlePercentages = () => {
    const percentages = parseFloat(currentNumber) / 100;
    setCurrentNumber(String(percentages));
  };

  const computeNumber = () => {
    if (isNaN(parseFloat(prevNumber)) || isNaN(parseFloat(currentNumber)))
      return;

    const result = computeCalculatorAction(
      prevNumber,
      currentNumber,
      action as Action
    );
    /** TODO:
     *  Resolve issue with state not changing,
     *  this does not get set when changing value
     */
    setCurrentNumber(String(result));
    setAction(undefined);
    setPrevNumber("");
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setPrevNumber("");
    setAction(undefined);
    setIsCalculatorTouched(false);
  };

  return (
    <div className={classNames(styles.calcuMain)}>
      <div className={classNames(styles.calcContainer)}>
        <div className={classNames(styles.displayContainer)}>
          <CalculatorCirclesRow />
          <CalculatorDisplay
            action={action}
            prevNumber={prevNumber}
            currentNumber={currentNumber}
          />
        </div>
        <div className={classNames(styles.calcActionsContainer)}>
          <div className={classNames(styles.calcActionsRow)}>
            <CalculatorTile backgroundColor="darkGrey" onClick={handleClear}>
              {currentNumber !== "0" || prevNumber.length ? "AC" : "C"}
            </CalculatorTile>
            <CalculatorTile
              backgroundColor="darkGrey"
              onClick={handlePlusMinus}
            >
              +/-
            </CalculatorTile>
            <CalculatorTile
              backgroundColor="darkGrey"
              onClick={handlePercentages}
            >
              %
            </CalculatorTile>
            <CalculatorTile
              backgroundColor="orange"
              onClick={() => handleAction(Action.DIVIDE)}
              lastRightTileInRow
            >
              /
            </CalculatorTile>
          </div>
          <div className={classNames(styles.calcActionsRow)}>
            <CalculatorTile onClick={() => handleNumber("7")}>7</CalculatorTile>
            <CalculatorTile onClick={() => handleNumber("8")}>8</CalculatorTile>
            <CalculatorTile onClick={() => handleNumber("9")}>9</CalculatorTile>
            <CalculatorTile
              backgroundColor="orange"
              onClick={() => handleAction(Action.MULTIPLY)}
              lastRightTileInRow
            >
              x
            </CalculatorTile>
          </div>
          <div className={classNames(styles.calcActionsRow)}>
            <CalculatorTile onClick={() => handleNumber("4")}>4</CalculatorTile>
            <CalculatorTile onClick={() => handleNumber("5")}>5</CalculatorTile>
            <CalculatorTile onClick={() => handleNumber("6")}>6</CalculatorTile>
            <CalculatorTile
              backgroundColor="orange"
              onClick={() => handleAction(Action.SUBTRACT)}
              lastRightTileInRow
            >
              -
            </CalculatorTile>
          </div>
          <div className={classNames(styles.calcActionsRow)}>
            <CalculatorTile onClick={() => handleNumber("1")}>1</CalculatorTile>
            <CalculatorTile onClick={() => handleNumber("2")}>2</CalculatorTile>
            <CalculatorTile onClick={() => handleNumber("3")}>3</CalculatorTile>
            <CalculatorTile
              backgroundColor="orange"
              onClick={() => handleAction(Action.ADD)}
              lastRightTileInRow
            >
              +
            </CalculatorTile>
          </div>
          <div className={classNames(styles.calcActionsLastRow)}>
            <CalculatorTile onClick={() => handleNumber("0")}>0</CalculatorTile>
            <CalculatorTile onClick={() => handleNumber(".")}>.</CalculatorTile>
            <CalculatorTile
              backgroundColor="orange"
              onClick={computeNumber}
              lastRightTileInRow
            >
              =
            </CalculatorTile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
