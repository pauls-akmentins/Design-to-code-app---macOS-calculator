import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./AppContainer.module.css";
import AppTitle from "../AppDescription";

interface Props {
  children: ReactNode;
  appName: string;
  appDescription: string;
}

const AppContainer: React.FC<Props> = ({
  children,
  appName,
  appDescription,
}) => {
  return (
    <div className={classNames(styles.appContainer)}>
      <AppTitle appName={appName} appDescription={appDescription} />
      {children}
    </div>
  );
};

export default AppContainer;
