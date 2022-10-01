import Blog from "./Blog";
import Calculator from "./Calculator";
import AppContainer from "../../shared/AppContainer";

const Apps: React.FC = () => (
  <>
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

export default Apps;
