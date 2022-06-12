import React from "react";

export interface CalculatorTileProps {
  onClick: () => void;
  children?: React.ReactNode;
  backgroundColor?: "grey" | "orange" | "darkGrey";
  lastRightTileInRow?: boolean;
}
