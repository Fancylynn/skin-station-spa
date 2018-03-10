import React from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {render} from "react-dom";
import App from "./App";
import reducer from "./reducers";
import saga from "./sagas";
import "bootstrap/dist/css/bootstrap.css";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger());
const store = createStore(
  reducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(saga);
// <Provider store={store}>

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("container")
);

// window.devToolsExtension && window.devToolsExtension()
