import classNames from "classnames";
import { Post } from "../types";
import styles from "./SinglePost.module.css";

const SinglePost: React.FC<Post> = ({ id, userId, title, body }) => {
  return (
    <div className={classNames(styles.postContainer)}>
      <div className={classNames(styles.postHeader)}>
        <div>{title}</div>
      </div>
      <div className={classNames(styles.postContent)}>
        <div>{body}</div>
      </div>
    </div>
  );
};

export default SinglePost;
