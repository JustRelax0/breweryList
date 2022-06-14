import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';
import List from './list.jsx';
import Itemdetails from './itemdetails.jsx';
import Brewmap from './brewmap.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      breweries: [],
      detailView: false,
      detailName: '',
      detailAddress: '',
      center: {
        lat: 39.9743646,
        lng: -75.1808422
      },
      zoom: 13
    }
    this.detailRender = this.detailRender.bind(this);
  }

  //Initialize the app, ensure it only attempts to render when breweries array is not empty
  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/breweries/?by_city=Philadelphia')
    .then(result => {
      this.setState({
        breweries: result.data,
        isLoading: false
      });
    })
    .catch(error => {
      alert('There was an error retrieving data for the webpage: ', error);
    });
  }

  //Sends relevant data when getting details for just one brewery
  detailRender(name, address, lat, lng) {
    this.setState({
      detailView: !this.state.detailView,
      detailName: name,
      detailAddress: address,
      center: {
        lat: lat,
        lng: lng
      }
    });
  }

  render() {
    const { isLoading, breweries, detailView } = this.state;

    //If data is not retrieved yet, render a loading screen. Otherwise, determine the view based on whether the user has
    //clicked on a brewery on the list and whether that brewery has latitude and longitude values

    if (isLoading) {
      return <div>Page loading...</div>;
    } else {
      if (!detailView) {
        return (
          <div>
            <h1 className='listTitle'>Brewery List</h1>
            <List breweries={this.state.breweries} detailRender={this.detailRender} />
          </div>
        );
      } else {
        if (this.state.center.lat && this.state.center.lng) {
          return (
            <div>
              <Itemdetails detailRender={this.detailRender} name={this.state.detailName} address={this.state.detailAddress}/>
              <Brewmap center={this.state.center} zoom={this.state.zoom}/>
            </div>
          );
        } else {
          return (
            <div>
              <Itemdetails detailRender={this.detailRender} name={this.state.detailName} address={this.state.detailAddress}/>
              <div className='mapUnavailable'>Google Maps location unavailable</div>
            </div>
          );
        }
      }
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));