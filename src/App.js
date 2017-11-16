import React, {PureComponent, PropTypes} from "react";
import {Router, Route, browserHistory} from "react-router";
import Homepage from "./containers/Homepage";
import Signup from "./components/Signup";
import Services from "./components/Services";
import Locations from "./components/Locations";
import NotFound from "./components/NotFound";

class App extends PureComponent {
  render() {
    return (
      <Router history={browserHistory} key={0}>
        <Route exact path="/" component={Homepage}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/services" component={Services}/>
        <Route path="/location" component={Locations}/>
        <Route path="/*" component={NotFound}/>
      </Router>
    );
  }
}

export default App;
