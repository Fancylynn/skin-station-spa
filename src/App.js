import React, {PureComponent, PropTypes} from "react";
import {Router, Route, browserHistory} from "react-router";
import Homepage from "./containers/Homepage";
import Signup from "./components/Signup";

class App extends PureComponent {
  render() {
    return (
      <Router history={browserHistory} key={0}>
        <Route exact path="/" component={Homepage}/>
        <Route path="/signup" component={Signup}/>
      </Router>
    );
  }
}

export default App;
