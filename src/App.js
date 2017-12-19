import React, {PureComponent} from "react";
import {Router, Route, browserHistory} from "react-router";
import Homepage from "./containers/Homepage";
import Signup from "./components/Signup";
import Services from "./components/Services";
import Locations from "./components/Locations";
import NotFound from "./components/NotFound";
import Reservation from "./components/Reservation";
import AboutUs from "./components/AboutUs";
import Policy from "./components/Policy";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import FAQ from "./components/FAQ";

class App extends PureComponent {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} key={0}>
        <Route component={Layout}>
          <Route exact path="/" component={Homepage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/services" component={Services}/>
          <Route path="/location" component={Locations}/>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/aboutUs" component={AboutUs}/>
          <Route path="/contact" component={Contact}/>
        </Route>
        <Route path="/policy" component={Policy}/>
        <Route path="/FAQ" component={FAQ}/>
        <Route path="/*" component={NotFound}/>
      </Router>
    );
  }
}

export default App;
