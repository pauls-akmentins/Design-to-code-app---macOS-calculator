import classNames from "classnames";

import styles from "./Main.module.css";
import Calculator from "./components/Calculator";
import macOSCalculatorScreenshot from "./static/images/macOSCalculatorMonterey.png";

export const Main = () => {
  return (
    <div className={classNames(styles.mainContainer)}>
      <div className={classNames(styles.itemContainer)}>
        <p className={classNames(styles.title)}>macOS Monetrey calculator replica</p>
        <Calculator />
      </div>
      <hr className={classNames(styles.dividerLine)} />
      <div className={classNames(styles.itemContainer)}>
        <p className={classNames(styles.title)}>macOS Monetrey calculator screenshot</p>
        <img
          src={macOSCalculatorScreenshot}
          height={500}
          width={350}
          alt="macOSCalculatorScreenshot"
        />
      </div>
    </div>
  );
};
