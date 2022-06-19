import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Posts.module.css";

const Posts: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classNames(styles.outerPostsContainer)}>
      <div className={classNames(styles.innerPostsContainer)}>{children}</div>
    </div>
  );
};

export default Posts;
