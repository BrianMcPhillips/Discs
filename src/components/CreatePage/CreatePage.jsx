import React, { Component } from 'react';
import { createDisc } from '../../services/discs-api';
import Form from '../Form/Form';

export default class CreatePage extends Component {
  state = {
    brand: 1,
    name: '',
    speed: 1,
    awesome: false,
    image: ''
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
    this.setState({ brand: Number(e.target.value) });
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSpeedChange = (e) => {
    this.setState({ speed: e.target.value });
  }

  handleAwesomeChange = (e) => {
    this.setState({ awesome: e.target.checked });
  }

  handleImageChange = (e) => {
    this.setState({ image: e.target.value });
  }

  render() {
    const {
      name,
      speed,
      awesome,
      image
    } = this.state;
    return (
      <div>
        <Form 
          handleSubmit={this.handleSubmit}
          handleBrand={this.handleBrandChange}
          handleName={this.handleNameChange}
          handleSpeed={this.handleSpeedChange}
          handleAwesome={this.handleAwesomeChange}
          handleImage={this.handleImageChange}
          name={name}
          speed={speed}
          awesome={awesome}
          image={image}
        />
      </div>
    )
  }
}
