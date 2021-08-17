import React, { Component } from 'react';
import { createDisc } from '../../services/discs-api';

const brands = [
  'Innova',
  'Dynamic Discs',
  'Discraft',
  'Discmania',
  'Prodigy Disc'
]

export default class CreatePage extends Component {
  state = {
    brand: 'Innova',
    name: '',
    speed: 1,
    image: '',
    discState: null
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const discData = {
      brand: this.state.brand,
      name: this.state.name,
      speed: this.state.speed,
      image: this.state.image
    };
   const response =  await createDisc(discData);
   this.setState({ discState: response.body[0] });

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

  handleImageChange = (e) => {
    this.setState({ image: e.target.value })
  }

  render() {
    const { brand, name, speed, image, discState } = this.state;
    return (
      <div>
        <h1>Add a disc to database</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Brand</p>
              <select onChange={this.handleBrandChange}>
                {
                  brands.map(option => <option key={option} defaultValue={brand}>{option}</option>)
                }
              </select>
            </label>
            <label>
              <p>Name</p>
              <input onChange={this.handleNameChange} type='text' defaultValue={name}/>
            </label>
            <label>
              <p>Speed</p>
              <input onChange={this.handleSpeedChange} type='number' defaultValue={speed} />
            </label>
            <label>
              <p>Image</p>
              <input onChange={this.handleImageChange} type="text" defaultValue={image}/>
            </label>
            <button>Add Disc</button>
          </form>
        </div>
        {
          discState !== null && 
            <div>
              <img src={discState.image} alt={discState.name} /> 
              <h2>{discState.brand}</h2>
              <h3>{discState.name}</h3>
              <p>Speed: {discState.speed}</p>
            </div>
        }
      </div>
    )
  }
}
