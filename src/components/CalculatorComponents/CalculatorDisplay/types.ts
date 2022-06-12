import { Action } from "../Calculator/types";

export interface CalculatorDisplayProps {
  action?: Action;
  prevNumber: string;
  currentNumber: string;
}
