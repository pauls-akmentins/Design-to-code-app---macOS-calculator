import Blog from "./components/Blog";
import Calculator from "./components/Calculator";
import WelcomeBanner from "./components/shared/WelcomeBanner";
import AppContainer from "./components/shared/AppContainer";

const Main: React.FC = () => {
  return (
    <>
      <WelcomeBanner />
      <AppContainer appName="macOS calculator replica" appDescription="TO DO">
        <Calculator />
      </AppContainer>
      <AppContainer appName="simple blog type app" appDescription="TO DO">
        <Blog />
      </AppContainer>
    </>
  );
};

export default Main;
