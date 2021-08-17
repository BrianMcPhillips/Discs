import React, { Component } from 'react';

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
    image: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleBrandChange = (e) => {
    this.setState({ brand: e.target.value })
  }

  handleNameChange = (e) => {
    this.setState=({ name: e.target.value })
  }

  handleSpeedChange = (e) => {
    this.setState({ speed: e.target.value })
  }

  handleImageChange = (e) => {
    this.setState({ image: e.target.value })
  }

  render() {
    const { brand, name, speed, image } = this.state;
    return (
      <div>
        <h1>Add a disc to database</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Brand</p>
              <select onChange={this.handleBrandChange}>
                {
                  brands.map(option => <option key={option} value={brand}>{option}</option>)
                }
              </select>
            </label>
            <label>
              <p>Name</p>
              <input onChange={this.handleNameChange} type='text' value={name}/>
            </label>
            <label>
              <p>Speed</p>
              <input onChange={this.handleSpeedChange} type='number' value={speed} />
            </label>
            <label>
              <p>Image</p>
              <input onChange={this.handleImageChange} type="text" value={image}/>
            </label>
            <button>Add Disc</button>
          </form>
        </div>
      </div>
    )
  }
}
