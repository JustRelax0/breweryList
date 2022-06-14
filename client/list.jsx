import React from 'react';
import Listitem from './listitem.jsx';

//Use array of breweries to generate a list
class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        {this.props.breweries.map(brewery => (
          <div>
            <Listitem name={brewery.name} brewery_type={brewery.brewery_type} street={brewery.street} city={brewery.city} state={brewery.state} postal_code={brewery.postal_code} country={brewery.country} website_url={brewery.website_url} detailRender={this.props.detailRender} lat={brewery.latitude} lng={brewery.longitude} />
          </div>
        ))}
      </div>
    )
  }
}

export default List;