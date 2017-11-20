import _ from "lodash";
import React from "react";
import {compose, withProps} from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const GoogleMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAiULbxpY5Y2lCdsM11fEX5E9RfHQOWgKU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`}}/>,
    mapElement: <div style={{height: `100%`}}/>
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={20} defaultCenter={{lat: 40.718282, lng: -73.992011}}>
    <Marker position={{lat: {props.lat}, lng: this.props.lng}/>
  </GoogleMap>
));

export default GoogleMapComponent;
