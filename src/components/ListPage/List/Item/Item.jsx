import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { 
      data: {
        brand,
        name,
        speed
      } 
    } = this.props;
    return (
      <div>
       <h3>{name}</h3>
       <h5>{brand}</h5>
       <p>{speed}</p>
      </div>
    )
  }
}
