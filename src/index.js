import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { AppContainer } from "react-hot-loader";
import "./styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

WebFont.load({
  google: {
    families: ["sans-serif", "Libre Franklin"],
  },
});

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
