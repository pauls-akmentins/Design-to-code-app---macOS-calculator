import classNames from "classnames";
import styles from "./CalculatorCirclesRow.module.css";
import { CircleType } from "./types";
import { getCircleType } from "./utls";

const CalculatorCirclesRow: React.FC = () => (
  <div className={classNames(styles.topActionRowWrapper)}>
    {Object.values(CircleType).map((circleType, i) => (
      <div
        key={`${circleType}-${i}`}
        className={classNames(
          styles.circleButtonContainer,
          styles[`circleButtonContainer-${circleType}`]
        )}
      >
        <span
          className={classNames(
            styles.circleButton,
            styles[`circleButton-${circleType}`]
          )}
        >
          {getCircleType(circleType)}
        </span>
      </div>
    ))}
  </div>
);

export default CalculatorCirclesRow;
