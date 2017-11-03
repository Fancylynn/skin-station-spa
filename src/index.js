import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {render} from "react-dom";
import App from "./App";
// import Homepage from "./containers/Homepage";

const store = createStore(
	window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("container")
);
