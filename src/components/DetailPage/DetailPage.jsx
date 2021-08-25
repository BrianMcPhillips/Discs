import React, { Component } from 'react';
import { fetchDiscById, deleteDisc } from '../../services/discs-api';

export default class DetailPage extends Component {
  state = {
    singleDisc: {}
  }

  componentDidMount = async() => {
    const id = this.props.match.params.id;
    const data = await fetchDiscById(id);
    this.setState({ singleDisc: data.body });
  }

  handleDelete = async() => {
    const id = this.props.match.params.id;
    await deleteDisc(id);
    this.props.history.push('/');
  }
  
  render() {
    const {
      singleDisc: {
        brand,
        name,
        speed,
        awesome,
        image
      }
    } = this.state;
    return (
      <div>
        <img src={image} alt={name} />
        <h2>{brand}</h2>
        <h4>{name}</h4>
        <p>Is this disc awesome? { awesome ? 'Yes' : 'No' }</p>
        <p>{speed}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}
