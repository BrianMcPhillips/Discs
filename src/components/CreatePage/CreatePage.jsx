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

  handleBrandChange = () => {

  }

  handleNameChange = () => {

  }

  handleSpeedChange = () => {

  }

  handleImageChange = () => {

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
              <select>
                {
                  brands.map(option => <option key={option} value={brand}>{option}</option>)
                }
              </select>
            </label>
            <label>
              <p>Name</p>
              <input type='text' value={name}/>
            </label>
            <label>
              <p>Speed</p>
              <input type='number' value={speed} />
            </label>
            <label>
              <p>Image</p>
              <input type="text" value={image}/>
            </label>
            <button>Add Disc</button>
          </form>
        </div>
      </div>
    )
  }
}
