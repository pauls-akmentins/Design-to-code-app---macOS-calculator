import classNames from "classnames";
import styles from "./CalculatorDisplay.module.css";
import { CalculatorDisplayProps } from "./types";

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  action,
  prevNumber,
  currentNumber,
}) => (
  <div
    className={classNames(
      styles.calcResultContainer,
      action && styles["calcResultContainer-withAction"]
    )}
  >
    {prevNumber !== "" && (
      <span className={classNames(styles.calcPrevious)}>
        {`${prevNumber} ` + action}
      </span>
    )}
    {currentNumber !== "" && (
      <span className={classNames(styles.calcCurrent)}>{currentNumber}</span>
    )}
  </div>
);

export default CalculatorDisplay;
