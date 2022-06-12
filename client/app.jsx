import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';
import List from './list.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      breweries: []
    }
  }

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
    })
  }

  render() {
    const { isLoading, breweries } = this.state;

    if (isLoading) {
      return <div>Page loading...</div>;
    } else {
      return (
        <div>
          <List breweries={this.state.breweries} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));