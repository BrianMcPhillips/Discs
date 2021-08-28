import React, { Component } from 'react';
import { fetchBrands } from '../../services/discs-api';

export default class Form extends Component {
  state = {
    brandState: []
  }

  componentDidMount = async() => {
    const data = await fetchBrands();
    this.setState({ brandState: data.body })
  }

  render() {
    const { brandState } = this.state;
    const {
      handleBrand,
      handleName,
      handleSpeed,
      handleAwesome,
      handleImage,
      handleSubmit,
      brand,
      name,
      speed,
      awesome,
      image
    } = this.props;
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Brand</p>
          <select onChange={handleBrand} defaultValue={brand}>
            {
              brandState.map((option, i) => <option key={option.label + i} value={option.id}>{option.label}</option>)
            }
          </select>
        </label>
        <label>
          <p>Name</p>
          <input onChange={handleName} type='text' defaultValue={name}/>
        </label>
        <label>
          <p>Speed</p>
          <input onChange={handleSpeed} type='number' defaultValue={speed} />
        </label>
        <label>
          <p>Awesome</p>
          <input onChange={handleAwesome} type='checkbox' defaultValue={awesome} />
        </label>
        <label>
          <p>Image</p>
          <input onChange={handleImage} type="text" defaultValue={image}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
    )
  }
}
