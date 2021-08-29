import React, { Component } from 'react';
import { fetchDiscById, deleteDisc, updateDisc, fetchBrands } from '../../services/discs-api';
import Form from '../Form/Form';

export default class DetailPage extends Component {
  state = {
    singleDisc: {},
    brandData: [],
    updateBtn: 'Off',
    discId: 0,
    brandId: 1,
    brand: 1,
    name: '',
    speed: 1,
    awesome: false,
    image: ''
  }

  componentDidMount = async() => {
    const brandData = await fetchBrands();

    const id = this.props.match.params.id;
    const data = await fetchDiscById(id);
    
    const matchingBrand = brandData.body.find(brand => brand.name = data.body.brand)
    this.setState({ 
      singleDisc: data.body,
      discId: data.body.id,
      brand: matchingBrand.id,
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

    this.state.updateBtn === 'Off' 
    ? this.setState({ updateBtn: 'On' }) 
    : this.setState({ updateBtn: 'Off' });
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const updatedDisc = {
      brand: this.state.brandId,
      name: this.state.name,
      speed: this.state.speed,
      awesome: this.state.awesome,
      image: this.state.image
    };
    const id = this.state.discId;
    const upData = await updateDisc(id, updatedDisc);
    const data = await fetchDiscById(upData.body.name);
    this.setState({ singleDisc: data.body });
  }

  handleBrandChange = (e) => {
    this.setState({ brandId: Number(e.target.value) });
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
      singleDisc,
      updateBtn,
      brand,
      name,
      speed,
      awesome,
      image,
      brandData
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
                brandState={brandData}
                handleBrand={this.handleBrandChange}
                handleName={this.handleNameChange}
                handleSpeed={this.handleSpeedChange}
                handleAwesome={this.handleAwesomeChange}
                handleImage={this.handleImageChange}
                handleSubmit={this.handleSubmit}
              /> 
            </div>
        }
      </div>
    )
  }
}
