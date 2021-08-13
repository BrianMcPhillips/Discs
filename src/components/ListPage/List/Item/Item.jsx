import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { 
      data: {
        brand,
        name,
        speed,
        image
      } 
    } = this.props;
    return (
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h5>{brand}</h5>
        <p>{speed}</p>
      </div>
    )
  }
}
