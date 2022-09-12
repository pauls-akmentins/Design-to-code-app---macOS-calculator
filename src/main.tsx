import Blog from "./components/Blog";
import Calculator from "./components/Calculator";
import WelcomeBanner from "./components/shared/WelcomeBanner";
import AppContainer from "./components/shared/AppContainer";

const Main: React.FC = () => {
  return (
    <>
      <WelcomeBanner />
      <AppContainer
        appName="macOS calculator replica"
        appDescription="reuse of logic and color schema for macOS calculator"
      >
        <Calculator />
      </AppContainer>
      <AppContainer
        appName="simple 'blog' type app"
        appDescription="used together with firebase database and Redux"
      >
        <Blog />
      </AppContainer>
    </>
  );
};

export default Main;
