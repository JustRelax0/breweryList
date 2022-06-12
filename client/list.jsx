import React from 'react';
import ReactDOM from 'react-dom';
import Listitem from './listitem.jsx';

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
          <div className='listitem'>
            <Listitem name={brewery.name} brewery_type={brewery.brewery_type} street={brewery.street} city={brewery.city} state={brewery.state} postal_code={brewery.postal_code} country={brewery.country} website_url={brewery.website_url} />
          </div>
        ))}
      </div>
    )
  }
}

export default List;