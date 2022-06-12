import React from 'react';
import ReactDOM from 'react-dom';

class Listitem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    // return (
    //   <div>
    //   <div>Name: {this.props.name}</div>
    //   <div>Type: {this.props.brewery_type}</div>
    //   <div>Address: {this.props.street || 'No street address yet'}, {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
    //   <div>Website:
    //     <a href={this.props.website_url} target='_blank'> {this.props.website_url}</a>
    //   </div>
    // </div>
    // );

    if (!this.props.name) {
      return (
        <div></div>
      );
    } else if (this.props.website_url && this.props.street) {
      return (
        <div>
          <div>Name: {this.props.name}</div>
          <div>Type: {this.props.brewery_type}</div>
          <div>Address: {this.props.street}, {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
          <div>Website:
            <a href={this.props.website_url} target='_blank'> {this.props.website_url}</a>
          </div>
        </div>
      );
    } else if (this.props.street && !this.props.website_url) {
        return (
          <div>
            <div>Name: {this.props.name}</div>
            <div>Type: {this.props.brewery_type}</div>
            <div>Address: {this.props.street || 'No street address yet'}, {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
          </div>
        );
    } else if (!this.props.street && this.props.website_url) {
      return (
        <div>
          <div>Name: {this.props.name}</div>
          <div>Type: {this.props.brewery_type}</div>
          <div>Address: {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
          <div>Website:
            <a href={this.props.website_url} target='_blank'> {this.props.website_url}</a>
          </div>
        </div>
      );
    } else if (!this.props.street && !this.props.website_url) {
      return (
        <div>
          <div>Name: {this.props.name}</div>
          <div>Type: {this.props.brewery_type}</div>
          <div>Address: {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
        </div>
      );
    }
  }
}

export default Listitem;