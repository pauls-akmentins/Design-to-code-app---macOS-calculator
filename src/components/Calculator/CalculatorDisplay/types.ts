import { Action } from "../types";

export interface CalculatorDisplayProps {
  action?: Action;
  prevNumber: string;
  currentNumber: string;
}
