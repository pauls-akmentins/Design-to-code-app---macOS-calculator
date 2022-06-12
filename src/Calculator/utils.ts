import { Action } from "./types";

export const computeCalculatorAction = (
  prevNumber: string,
  currentNumber: string,
  action: Action
) => {
  let result;
  const prevOperand = parseFloat(prevNumber);
  const currOperand = parseFloat(currentNumber);

  if (isNaN(prevOperand) || isNaN(currOperand)) return;

  switch (action) {
    case "+": {
      result = prevOperand + currOperand;
      break;
    }
    case "-": {
      result = prevOperand - currOperand;
      break;
    }
    case "*": {
      result = prevOperand * currOperand;
      break;
    }
    case "/": {
      result = prevOperand / currOperand;
      break;
    }
    default:
      return;
  }

  return result;
};
