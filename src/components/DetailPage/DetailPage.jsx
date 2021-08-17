import React, { Component } from 'react';
import { fetchDiscById } from '../../services/discs-api';

export default class DetailPage extends Component {
  state = {
    singleDisc: {}
  }

  componentDidMount = async() => {
    const id = this.props.match.params.id;
    const data = await fetchDiscById(id);
    this.setState({ singleDisc: data.body });
  }
  
  render() {
    const {
      singleDisc: {
        brand,
        name,
        speed,
        image
      }
    } = this.state;
    return (
      <div>
        <img src={image} alt={name} />
        <h2>{brand}</h2>
        <h4>{name}</h4>
        <p>{speed}</p>
      </div>
    )
  }
}
