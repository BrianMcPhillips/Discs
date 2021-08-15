import React, { Component } from 'react'; 
import request from 'superagent';
import List from './List/List';
import { fetchDiscs, fetchDiscById, createDisc } from '../../services/discs-api';

export default class ListPage extends Component {
  //Set default state
  state = {
    discData: []
  }

  //Get data from backend and set it to state
  componentDidMount = async() => {
    const data = await fetchDiscs();
    this.setState({ discData: data.body})
    
  }
  render() {
    //Destructure state
    const { discData } = this.state;
    return (
      <div>
        <List data={discData}/>
      </div>
    )
  }
}
