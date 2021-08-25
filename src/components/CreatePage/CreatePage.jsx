import React, { Component } from 'react';
import { createDisc, fetchBrands } from '../../services/discs-api';

export default class CreatePage extends Component {
  state = {
    brand: 1,
    name: '',
    speed: 1,
    awesome: false,
    image: '',
    brandState: []
  }

  componentDidMount = async() => {
    const data = await fetchBrands();
    this.setState({ brandState: data.body })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await createDisc({
      brand: this.state.brand,
      name: this.state.name,
      speed: this.state.speed,
      awesome: this.state.awesome,
      image: this.state.image
    });
    this.props.history.push('/');

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
                  brandState.map((option, i) => <option key={option.label + i} defaultValue={brand} value={option.id}>{option.label}</option>)
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
      </div>
    )
  }
}
