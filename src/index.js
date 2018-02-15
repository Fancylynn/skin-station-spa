import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {render} from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
// import Homepage from "./containers/Homepage";


// const store = createStore(
// 	window.devToolsExtension && window.devToolsExtension()
// );
// <Provider store={store}>

render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById("container")
);
