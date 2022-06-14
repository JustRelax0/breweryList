import React from 'react';
import GoogleMapReact from 'google-map-react';
import Mappin from './mappin.jsx';
import key from '../key.js';

//Component that provides Google Maps for individual brewery details view

class Brewmap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  static defaultProps = {
    center: {
      lat: 39.9743646,
      lng: -75.1808422
    },
    zoom: 13
  }

  render() {
      return (
        <div className='map' style={{height: '50vh', width: '40%'}}>
          <GoogleMapReact bootstrapURLKeys={{ key: key }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            <Mappin lat={this.props.center.lat} lng={this.props.center.lng}/>
          </GoogleMapReact>
        </div>
      );
  }
}

export default Brewmap;