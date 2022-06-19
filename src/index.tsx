import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './store/store'

import "./index.css";
import Main from "./main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
