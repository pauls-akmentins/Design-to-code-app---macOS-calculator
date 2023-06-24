import { Action } from "../types";

export type CalculatorDisplayProps = {
  action?: Action;
  prevNumber: string;
  currentNumber: string;
};
