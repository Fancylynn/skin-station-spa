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

class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Router history={browserHistory} key={0}>
          <Route exact path="/" component={Homepage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/services" component={Services}/>
          <Route path="/location" component={Locations}/>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/aboutUs" component={AboutUs}/>
          <Route path="/policy" component={Policy}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/*" component={NotFound}/>
        </Router>
      </Layout>
    );
  }
}

export default App;
