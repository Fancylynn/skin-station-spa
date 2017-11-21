import _ from "lodash";
import React from "react";
import {compose, withProps} from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAiULbxpY5Y2lCdsM11fEX5E9RfHQOWgKU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `500px`}}/>,
    mapElement: <div style={{height: `100%`}}/>
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
      defaultZoom={20}
      defaultCenter={{lat: props.lat, lng: props.lng}}
      center={{lat: props.lat, lng: props.lng}}
  >
    <Marker position={{lat: props.lat, lng: props.lng}}/>
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = (props) => {
  return (
    <MyMapComponent key="map" lat={props.lat} lng={props.lng}/>
  );
};

export default enhance(ReactGoogleMaps);
