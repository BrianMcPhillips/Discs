import React, { Component } from 'react';
import { createDisc, fetchBrands } from '../../services/discs-api';

// const brands = [
//   'Innova',
//   'Dynamic Discs',
//   'Discraft',
//   'Discmania',
//   'Prodigy Disc'
// ]

export default class CreatePage extends Component {
  state = {
    brand: 'Innova',
    name: '',
    speed: 1,
    awesome: false,
    image: '',
    discState: null,
    brandState: []
  }

  componentDidMount = async() => {
    const data = await fetchBrands();
    this.setState({ brandState: data.body })
    console.log(this.state.brandState);
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const response =  await createDisc({
      brand: this.state.brand,
      name: this.state.name,
      speed: this.state.speed,
      awesome: this.state.awesome,
      image: this.state.image
    });
    this.setState({ discState: response.body });

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
      brand, 
      name, 
      speed, 
      image, 
      awesome, 
      discState, 
      brandState } = this.state;
    return (
      <div>
        <h1>Add a disc to database</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Brand</p>
              <select onChange={this.handleBrandChange}>
                {
                  brandState.map((option, i) => <option key={option.label + i} defaultValue={brand}>{option.label}</option>)
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
              <p>Awesome</p>
              <input onChange={this.handleAwesomeChange} type='checkbox' defaultValue={awesome} />
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
              <p>Awesome: {discState.awesome ? 'Yes' : 'No' }</p>
              <p>Speed: {discState.speed}</p>
            </div>
        }
      </div>
    )
  }
}
