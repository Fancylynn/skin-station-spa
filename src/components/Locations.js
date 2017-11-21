import React, {Component, PropTypes} from "react";
import ReactGoogleMaps from "../components/GoogleMap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackIcon from "../components/BackIcon";
import cssModules from "react-css-modules";
import styles from "../styles/Locations.css";

class Locations extends Component {
  state = {
    location: "manhattan",
    lat: 40.718282,
    lng: -73.992011
  };

  onManhattan = () => {
    this.setState({location: "manhattan", lat: 40.718282, lng: -73.992011});
  }

  onBrooklyn = () => {
    this.setState({location: "brooklyn", lat: 40.63536180000001, lng: -74.00892229999999});
  }

  onForestAve = () => {
    this.setState({location: "forestave", lat: 40.629212, lng: -74.114796});
  }

  onOldTown = () => {
    this.setState({location: "oldtown", lat: 40.5960223, lng: -74.08626760000001});
  }

  onQueens = () => {
    this.setState({location: "queens", lat: 40.763572, lng: -73.828104});
  }

  onYonkers = () => {
    this.setState({location: "yonkers", lat: 40.98260440000001, lng: -73.8265533});
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div styleName="location-detail">
          <div styleName="locations-container">
            <h2>All Locations</h2>
            <div styleName="store-details">
              <div styleName="location">
                <h3 onClick={this.onManhattan}>Manhattan</h3>
                <p>113 Eldridge Street (Basement), New York, NY 1002</p>
                <p>(Between Grand and Broome Street)</p>
                <p>Tel: 212-343-7911</p>
                <p>Email: skinstation.manhattan@gmail.com</p>
                <p>Store Hours: Mon-Sun 10am-8pm</p>
              </div>
              <div styleName="location">
                <h3 onClick={this.onBrooklyn}>Brooklyn</h3>
                <p>817 60 street (off 8th Avenue), Brooklyn, NY 11220 </p>
                <p>Tel: 718-686-8881</p>
                <p>Email: skinstation.brooklyn@gmail.com</p>
                <p>Store Hours: Mon-Sun 10am-8pm</p>
              </div>
              <div styleName="location">
                <h3 onClick={this.onForestAve}>Forest Avenue</h3>
                <p>771 Forest Avenue, Staten Island, NY 10310</p>
                <p>(Near Staten Island Zoo, Next to McDonald @ Broadway) </p>
                <p>Tel: 718-442-9828</p>
                <p>Email: skinstation771forest@gmail.com</p>
                <p>Store Hours: Mon-Sat 9:30am-7pm, Sun 10am-5pm </p>
              </div>
              <div styleName="location">
                <h3 onClick={this.onOldTown}>Old Town</h3>
                <p>205 Old Town Road, Staten Island, NY 10305</p>
                <p>(Off Hylan Blvd)</p>
                <p>Tel: 718-980-1500</p>
                <p>Email: skinstation.oldtown@gmail.com</p>
                <p>Store Hours: Mon-Sat 9:30am-7pm, Sun 10am-5pm </p>
              </div>
              <div styleName="location">
                <h3 onClick={this.onQueens}>Queens</h3>
                <p>36-16 Union Street, 2/F, Flushing, NY 11354</p>
                <p>Tel: 718-961-4505</p>
                <p>Email: skinstationqueens@gmail.com</p>
                <p>Store Hours: Mon-Sun 10am-8pm </p>
              </div>
              <div styleName="location">
                <h3 onClick={this.onYonkers}>Yonkers</h3>
                <p>2500 Central Park Avenue, Yonkers, NY 10710 </p>
                <p>(Next to Movie Theater, Behind Best Buy) </p>
                <p>Tel: 914-395-3260 | 914-395-3256 </p>
                <p>Email: skinstation.yonkers@gmail.com</p>
                <p>Store Hours: Mon-Sat 10am-7pm, Sun 10am-5pm </p>
              </div>
            </div>
          </div>
          <div styleName="google-map-container">
            <ReactGoogleMaps lat={this.state.lat} lng={this.state.lng}/>
          </div>
        </div>
        <Footer/>
        <BackIcon/>
      </div>
    );
  }
}

export default cssModules(Locations, styles);
