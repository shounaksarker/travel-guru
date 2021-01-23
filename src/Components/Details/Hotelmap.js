import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Hotelmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapCenter: {
        lat: 21.4382371,
        lng: 91.9713826
      }
    };
  }
 
  render() {
    return (
      <div id='googleMaps'>
        <Map 
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        >
          <Marker 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')
  // apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')AIzaSyDOcdjX45SSHJFYi6YL2IbHMM5yJVuBzd8 => my
})(Hotelmap)