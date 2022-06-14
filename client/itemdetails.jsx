import React from 'react';


class Itemdetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.returnToList = this.returnToList.bind(this);
  }

  //Returns user back to brewery list view and resets state.
  returnToList() {
    this.props.detailRender('', '', 0, 0);
  }

  render() {
      return (
        <div className='itemDetails'>
          <a href='' onClick={this.props.returnToList}>Return to Brewery List</a>
          <h2>{this.props.name}</h2>
          <div>{this.props.address}</div>
        </div>
      );

  }
}

export default Itemdetails;