import classNames from "classnames";
import styles from "./AppDetails.module.css";

const AppTitle: React.FC<{ appName: string; appDescription: string }> = ({
  appName,
  appDescription,
}) => {
  return (
    <div className={classNames(styles.titleContainer)}>
      <span className={classNames(styles.title)}>{appName}</span>
      <span className={classNames(styles.description)}>{appDescription}</span>
    </div>
  );
};

export default AppTitle;
