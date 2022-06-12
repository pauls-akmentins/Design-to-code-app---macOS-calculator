import classNames from "classnames";
import styles from "./CalculatorTile.module.css";
import { CalculatorTileProps } from "./types";

const CalculatorTile: React.FC<CalculatorTileProps> = ({
  onClick,
  children,
  backgroundColor = "grey",
  lastRightTileInRow = false,
}) => {
  return (
    <div
      className={classNames(
        styles.calculatorTileContainer,
        styles[`calculatorTileContainer-${backgroundColor}`],
        lastRightTileInRow && styles["calculatorTileContainer-noRightBorder"]
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CalculatorTile;
