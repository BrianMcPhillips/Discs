import React, { Component } from 'react';
import { fetchDiscById, deleteDisc } from '../../services/discs-api';
import Form from '../Form/Form';

export default class DetailPage extends Component {
  state = {
    singleDisc: {},
    updateBtn: 'Off',
    brand: '',
    name: '',
    speed: 1,
    awesome: false,
    image: ''
  }

  componentDidMount = async() => {
    const id = this.props.match.params.id;
    const data = await fetchDiscById(id);
    this.setState({ 
      singleDisc: data.body,
      brand: data.body.brand,
      name: data.body.name,
      speed: data.body.speed,
      awesome: data.body.awesome,
      image: data.body.image
     });
  }

  handleDelete = async() => {
    const id = this.props.match.params.id;
    await deleteDisc(id);
    this.props.history.push('/');
  }
  handleUpdateBtn = () => {
    this.setState({ updateBtn: 'On' })
  }
  handleBrandChange = (e) => {
    this.setState({ brand: e.target.value })
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSpeedChange = (e) => {
    this.setState({ speed: e.target.value })
  }

  handleAwesomeChange = (e) => {
    this.setState({ awesome: e.target.checked })
  }

  handleImageChange = (e) => {
    this.setState({ image: e.target.value })
  }
  
  render() {
    const {
      singleDisc,
      updateBtn,
      brand,
      name,
      speed,
      awesome,
      image
    } = this.state;
    return (
      <div>
        <div>
          <img src={singleDisc.image} alt={singleDisc.name} />
          <h2>{singleDisc.brand}</h2>
          <h4>{singleDisc.name}</h4>
          <p>Is this disc awesome? { singleDisc.awesome ? 'Yes' : 'No' }</p>
          <p>{singleDisc.speed}</p>
          <div>
            <button onClick={this.handleUpdateBtn}>Update</button>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
        {
          updateBtn === 'On' && 
            <div>
              <Form 
                brand={brand}
                name={name}
                speed={speed}
                awesome={awesome}
                image={image}
                handleBrand={this.handleBrandChange}
                handleName={this.handleNameChange}
                handleSpeed={this.handleSpeedChange}
                handleAwesome={this.handleAwesomeChange}
                handleImage={this.handleImageChange}
              /> 
            </div>
        }
      </div>
    )
  }
}
