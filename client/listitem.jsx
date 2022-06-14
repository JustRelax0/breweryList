import React from 'react';

class Listitem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.detailProvider = this.detailProvider.bind(this);
  }

  //Changes state in app.jsx for rendering brewery detail view
  detailProvider() {
    if (!this.props.street) {
      this.props.detailRender(this.props.name, `${this.props.city}, ${this.props.state}, ${this.props.postal_code}, ${this.props.country}`, Number(this.props.lat), Number(this.props.lng));
    } else {
      this.props.detailRender(this.props.name, `${this.props.street}, ${this.props.city}, ${this.props.state}, ${this.props.postal_code}, ${this.props.country}`, Number(this.props.lat), Number(this.props.lng));
    }
  }

  //Change how an item on the list is presented based on what data is available or missing
  render() {
    if (!this.props.name) {
      return (
        <div></div>
      );
    } else if (this.props.website_url && this.props.street) {
      return (
        <div className='listitem' onClick={this.detailProvider}>
          <h2>{this.props.name}</h2>
          <div>Type: {this.props.brewery_type}</div>
          <div>Address: {this.props.street}, {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
          <div>Website:
            <a className='brewerylink' href={this.props.website_url} target='_blank'> {this.props.website_url}</a>
          </div>
        </div>
      );
    } else if (this.props.street && !this.props.website_url) {
        return (
          <div className='listitem' onClick={this.detailProvider}>
            <h2>{this.props.name}</h2>
            <div>Type: {this.props.brewery_type}</div>
            <div>Address: {this.props.street || 'No street address yet'}, {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
          </div>
        );
    } else if (!this.props.street && this.props.website_url) {
      return (
        <div className='listitem' onClick={this.detailProvider}>
          <h2>{this.props.name}</h2>
          <div>Type: {this.props.brewery_type}</div>
          <div>Address: {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
          <div>Website:
            <a className='brewerylink' href={this.props.website_url} target='_blank'> {this.props.website_url}</a>
          </div>
        </div>
      );
    } else if (!this.props.street && !this.props.website_url) {
      return (
        <div className='listitem' onClick={this.detailProvider}>
          <h2>{this.props.name}</h2>
          <div>Type: {this.props.brewery_type}</div>
          <div>Address: {this.props.city}, {this.props.state}, {this.props.postal_code}, {this.props.country}</div>
        </div>
      );
    }
  }
}

export default Listitem;