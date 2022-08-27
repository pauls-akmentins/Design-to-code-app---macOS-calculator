import classNames from "classnames";
import styles from "./WelcomeBanner.module.css";

const WelcomeBanner = () => {
  return (
    <div className={classNames(styles.welcomeBannerContainer)}>
      <span className={classNames(styles.welcomeTitle)}>
        Welcome to my portfolio page
      </span>
      <span className={classNames(styles.welcomeDescription)}>
        This page contains various small projects I worked on to with the
        purpose learn and strengthen my knowledge in different technologies and
        coding practices.
      </span>
    </div>
  );
};

export default WelcomeBanner;
